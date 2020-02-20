package lt.ocirama.labsystem.converters;

import static java.util.stream.Collectors.toList;

import java.util.List;
import lt.ocirama.labsystem.model.dto.Sample;
import lt.ocirama.labsystem.model.entities.SampleEntity;
import org.springframework.stereotype.Component;

@Component
public class SampleConverter {

    public List<Sample> convert(List<SampleEntity> samples) {
        return samples.stream()
            .map(this::convert)
            .collect(toList());
    }

    public Sample convert(SampleEntity sample) {
        if (sample == null) {
            throw new IllegalArgumentException("Sample is required");
        }
        return new Sample(
            sample.getId(),
            sample.getOrder().getProtocolId(),
            sample.getSampleId(),
            sample.getSampleWeight()
            //order.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate()
        );
    }
}
