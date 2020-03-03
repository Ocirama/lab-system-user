package lt.ocirama.labsystem.services;

import java.util.List;
import lt.ocirama.labsystem.converters.TrayConverter;
import lt.ocirama.labsystem.converters.TrayWeightEntityConverter;
import lt.ocirama.labsystem.model.dto.Tray;
import lt.ocirama.labsystem.model.dto.TraySave;
import lt.ocirama.labsystem.model.entities.TrayWeightEntity;
import lt.ocirama.labsystem.repositories.TrayRepository;
import org.springframework.stereotype.Service;

@Service
public class TrayService {

    private final TrayConverter trayConverter;
    private final TrayWeightEntityConverter trayWeightEntityConverter;
    private final TrayRepository trayRepository;

    public TrayService(TrayConverter trayConverter, TrayWeightEntityConverter trayWeightEntityConverter, TrayRepository trayRepository) {
        this.trayConverter = trayConverter;
        this.trayWeightEntityConverter = trayWeightEntityConverter;
        this.trayRepository = trayRepository;
    }

    public List<Tray> getAll() {
        List<TrayWeightEntity> trays = trayRepository.findAll();

        return trayConverter.convert(trays);
    }

    public Tray getTray(String id) {
        TrayWeightEntity tray = trayRepository.findOneById(id);

        return trayConverter.convert(tray);
    }

    public Tray save(TraySave tray) {
        TrayWeightEntity trayWeightEntity = trayWeightEntityConverter.convert(tray);
        TrayWeightEntity result = trayRepository.save(trayWeightEntity);

        return trayConverter.convert(result);
    }

    public void delete(Integer id) {
        trayRepository.deleteById(id);
    }

}

