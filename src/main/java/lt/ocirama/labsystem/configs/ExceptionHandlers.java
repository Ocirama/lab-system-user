package lt.ocirama.labsystem.configs;

import lt.ocirama.labsystem.model.exceptions.ServerError;
import lt.ocirama.labsystem.model.exceptions.ValidationException;
import org.springframework.context.MessageSource;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Locale;
import java.util.Objects;

import javax.servlet.http.HttpServletResponse;



@ControllerAdvice
public class ExceptionHandlers {

    private final MessageSource messageSource;

    public ExceptionHandlers(MessageSource messageSource) {
        this.messageSource = messageSource;
    }

    @ExceptionHandler(value = ValidationException.class)
    @ResponseBody
    public ServerError handleValidationException(HttpServletResponse response, ValidationException ex) {
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);

        String header = messageSource.getMessage(Objects.requireNonNull(ex.getErrors().getGlobalError()), Locale.getDefault());
        List<String> items = new ArrayList<>();
        for (FieldError fieldError : ex.getErrors().getFieldErrors()) {
            items.add(messageSource.getMessage(fieldError, Locale.getDefault()));
        }

        return new ServerError(header, items);
    }

    @ExceptionHandler(value = IllegalArgumentException.class)
    @ResponseBody
    public ServerError handleIllegalArgumentException(HttpServletResponse response, IllegalArgumentException ex) {
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        String header = ex.getMessage();
        return new ServerError(header, new ArrayList<>());
    }

    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public ServerError handleGeneralException(HttpServletResponse response, Exception ex) {
        response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        String header = "Server error";
        ex.printStackTrace();

        return new ServerError(header, Collections.singletonList(ex.getMessage()));
    }
}
