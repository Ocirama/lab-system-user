package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.Order;
import lt.ocirama.labsystem.model.entities.OrderEntity;
import lt.ocirama.labsystem.model.entities.SampleEntity;
import lt.ocirama.labsystem.model.dto.SampleSave;
import lt.ocirama.labsystem.repositories.OrderRepository;
import lt.ocirama.labsystem.repositories.SampleRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Objects;

@Component
public class SampleEntityConverter {

    private final SampleRepository sampleRepository;
    private final OrderRepository order;

    public SampleEntityConverter(SampleRepository sampleRepository, OrderRepository order) {
        this.sampleRepository = sampleRepository;
        this.order = order;
    }

    LocalDate localDate = LocalDate.now();

    public SampleEntity convert(SampleSave sample
    ) {
        SampleEntity result;

        if (Objects.isNull(sample.getId())) {
            result = new SampleEntity();
            result.setOrder(order.findByProtocolId(sample.getProtocolId()));
            result.setSampleId(sample.getSampleId());
            result.setSampleWeight(sample.getSampleWeight());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        } else {
            result = sampleRepository.findOneById(sample.getId());
            result.setOrder(order.findByProtocolId(sample.getProtocolId()));
            result.setSampleId(sample.getSampleId());
            result.setSampleWeight(sample.getSampleWeight());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));

        }
        return result;
    }
}
