package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.OrderEntity;
import lt.ocirama.labsystem.model.SampleEntity;
import lt.ocirama.labsystem.model.dto.OrderSave;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.repositories.SampleRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Objects;

@Component
public class SampleEntityConverter {
    private final SampleRepository sampleRepository;

    public SampleEntityConverter(SampleRepository sampleRepository) {
        this.sampleRepository = sampleRepository;
    }

    LocalDate localDate = LocalDate.now();
    public SampleEntity convert(SampleSave sample) {
        SampleEntity result;

        if (Objects.isNull(sample.getId())) {
            result = new SampleEntity();
            result.setSampleId(sample.getSampleId());
            result.setSampleWeight(sample.getWeight());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        } else {
            result = sampleRepository.findOneById(sample.getId());
            result.setSampleId(sample.getSampleId());
            result.setSampleWeight(sample.getWeight());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        }

        return result;
    }
}
