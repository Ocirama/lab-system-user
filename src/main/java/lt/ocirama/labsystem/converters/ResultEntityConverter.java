package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.entities.ResultEntity;
import lt.ocirama.labsystem.model.dto.ResultSave;
import lt.ocirama.labsystem.repositories.ResultRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Objects;

@Component
public class ResultEntityConverter {
    private final ResultRepository resultRepository;

    public ResultEntityConverter(ResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    LocalDate localDate = LocalDate.now();

    public ResultEntity convert(ResultSave order) {
        ResultEntity result;

        if (Objects.isNull(order.getId())) {
            result = new ResultEntity();
            result.setCustomerId(order.getCustomerId());
            result.setProtocolId(order.getProtocolId());
            result.setSampleId(order.getSampleId());
            result.setAshValue(order.getAshValue());
            result.setTotalMoistureValue(order.getTotalMoistureValue());
            result.setCalorificValue(order.getCalorificValue());
        } else {
            result = resultRepository.findOneById(order.getId());
            result.setCustomerId(order.getCustomerId());
            result.setProtocolId(order.getProtocolId());
            result.setSampleId(order.getSampleId());
            result.setAshValue(order.getAshValue());
            result.setTotalMoistureValue(order.getTotalMoistureValue());
            result.setCalorificValue(order.getCalorificValue());
        }

        return result;
    }
}
