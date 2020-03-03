package lt.ocirama.labsystem.converters;

import java.time.LocalDate;
import java.util.Objects;
import lt.ocirama.labsystem.model.dto.TraySave;
import lt.ocirama.labsystem.model.entities.TrayWeightEntity;
import lt.ocirama.labsystem.repositories.TrayRepository;
import org.springframework.stereotype.Component;

@Component
public class TrayWeightEntityConverter {

    private final TrayRepository trayRepository;


    LocalDate localDate = LocalDate.now();

    public TrayWeightEntityConverter(TrayRepository trayRepository) {
        this.trayRepository = trayRepository;
    }


    public TrayWeightEntity convert(TraySave traySave) {
        TrayWeightEntity result;

        if (Objects.isNull(traySave.getId())) {
            result = new TrayWeightEntity();
            result.setTrayId(traySave.getTrayId());
            result.setTrayWeight(traySave.getTrayWeight());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        } else {
            result = trayRepository.findOneById(traySave.getTrayId());
            result.setTrayId(traySave.getTrayId());
            result.setTrayWeight(traySave.getTrayWeight());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        }

        return result;
    }
}
