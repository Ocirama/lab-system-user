package lt.ocirama.labsystem.converters;

import static java.util.stream.Collectors.toList;

import java.util.List;
import lt.ocirama.labsystem.model.dto.Tray;
import lt.ocirama.labsystem.model.entities.TrayWeightEntity;
import org.springframework.stereotype.Component;

@Component
public class TrayConverter {

    public List<Tray> convert(List<TrayWeightEntity> trays) {
        return trays.stream()
            .map(this::convert)
            .collect(toList());
    }

    public Tray convert(TrayWeightEntity tray) {
        if (tray == null) {
            throw new IllegalArgumentException("Tray is required");
        }
        return new Tray(
            tray.getId(),
            tray.getTrayId(),
            tray.getTrayWeight()
            //order.getDate().toInstant().atZone(ZoneId.systemDefault()).toLocalDate()
        );
    }

}
