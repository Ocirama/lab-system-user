package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.entities.TotalMoistureEntity;
import lt.ocirama.labsystem.model.dto.TotalMoisture;
import org.springframework.stereotype.Component;

import java.util.List;

import static java.util.stream.Collectors.toList;
@Component
public class TotalMoistureConverter {

    public List<TotalMoisture> convert(List<TotalMoistureEntity> totalMoistureEntities) {
        return totalMoistureEntities.stream()
                .map(this::convert)
                .collect(toList());
    }

    public TotalMoisture convert(TotalMoistureEntity totalMoistureEntity) {
        return new TotalMoisture(
                totalMoistureEntity.getId(),
                totalMoistureEntity.getTray().getSample().getOrder().getProtocolId(),
                totalMoistureEntity.getTray().getSample().getSampleId(),
                totalMoistureEntity.getTray().getTrayId(),
                totalMoistureEntity.getTrayWeight(),
                totalMoistureEntity.getTrayAndSampleWeightBefore(),
                totalMoistureEntity.getTrayAndSampleWeightAfter(),
                totalMoistureEntity.getTrayAndSampleWeightAfterPlus()
                //order.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate()
        );
    }
}
