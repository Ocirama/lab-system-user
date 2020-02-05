package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.SampleEntity;
import lt.ocirama.labsystem.model.dto.Sample;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;

@Component
public class SampleConverter {
    public List<Sample> convert(List<SampleEntity> samples) {
        return samples.stream()
                .map(this::convert)
                .collect(toList());
    }

    public Sample convert(SampleEntity sample) {
        return new Sample(
                sample.getId(),
                sample.getOrder().getProtocolId(),
                sample.getSampleId(),
                sample.getSampleWeight()
                //order.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate()
        );
    }
}
