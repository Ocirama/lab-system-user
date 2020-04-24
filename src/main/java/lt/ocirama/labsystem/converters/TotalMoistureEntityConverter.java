package lt.ocirama.labsystem.converters;

import lt.ocirama.labsystem.model.dto.TotalMoistureSave;
import lt.ocirama.labsystem.model.entities.TotalMoistureEntity;
import lt.ocirama.labsystem.model.entities.TrayEntity;
import lt.ocirama.labsystem.repositories.OrderRepository;
import lt.ocirama.labsystem.repositories.SampleRepository;
import lt.ocirama.labsystem.repositories.TotalMoistureRepository;
import lt.ocirama.labsystem.repositories.TrayRepository;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Component
public class TotalMoistureEntityConverter {
    private final TotalMoistureRepository totalMoistureRepository;
    private final OrderRepository order;
    private final SampleRepository sample;
    private final TrayRepository tray;


    LocalDate localDate = LocalDate.now();

    public TotalMoistureEntityConverter(TotalMoistureRepository totalMoistureRepository, OrderRepository order, SampleRepository sample, TrayRepository tray) {
        this.totalMoistureRepository = totalMoistureRepository;
        this.order = order;
        this.sample = sample;
        this.tray = tray;
    }


    public TotalMoistureEntity convert(TotalMoistureSave totalMoistureSave) {
        TotalMoistureEntity result;
        TrayEntity newTray;
        List<TotalMoistureEntity> tmList;
        if (Objects.isNull(totalMoistureSave.getId())) {
            tmList = new ArrayList<>();
            newTray = new TrayEntity();
            newTray.setTrayId(totalMoistureSave.getTrayId());

            newTray.setSample(sample.findAllByProtocol(totalMoistureSave.getProtocolId()).stream()
                    .filter(x -> totalMoistureSave.getSampleId().equals(x.getSampleId()))
                    .findFirst()
                    .orElse(null));


            result = new TotalMoistureEntity();
            result.setTray(newTray);
            result.setTrayWeight(totalMoistureSave.getTrayWeight());
            result.setTrayAndSampleWeightBefore(totalMoistureSave.getTrayAndSampleWeightBefore());
            tmList.add(result);
            newTray.setTotalMoistureEntities(tmList);
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        } else {
            result = totalMoistureRepository.findOneById(totalMoistureSave.getId());
            result.setTrayWeight(totalMoistureSave.getTrayWeight());
            result.setTrayAndSampleWeightBefore(totalMoistureSave.getTrayAndSampleWeightBefore());
            //result.setDate(java.sql.Date.valueOf(order.getDate()));
        }

        return result;


    }


    public TotalMoistureEntity convert2(TotalMoistureSave totalMoistureSave) {
        TotalMoistureEntity result = new TotalMoistureEntity();
        TrayEntity newTray;


        newTray = totalMoistureRepository.findByTrayAndDate(totalMoistureSave.getTrayId(), DateConverter.dateInput(totalMoistureSave.getDate()));
        List<TotalMoistureEntity> as = newTray.getTotalMoistureEntities();
        for (TotalMoistureEntity a : as) {
            a.setTrayAndSampleWeightAfter(totalMoistureSave.getTrayAndSampleWeightAfter());
            totalMoistureSave.setTrayAndSampleWeightAfterPlus(totalMoistureSave.getTrayAndSampleWeightAfter() + DateConverter.getRandomNumberInRange(0.05, 0.30));
            a.setTrayAndSampleWeightAfterPlus(totalMoistureSave.getTrayAndSampleWeightAfterPlus());
            result  = a;
        }

        return result;
    }
}

