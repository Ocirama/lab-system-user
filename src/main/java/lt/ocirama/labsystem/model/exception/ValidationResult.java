package lt.ocirama.labsystem.model.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
public class ValidationResult {

  private Map<String, List<String>> validationErrors;
}
