package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lt.ocirama.labsystem.model.entities.SampleEntity;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TotalMoistureSave {

    private Integer id;
    private String protocolId;
    private  String sampleId;
    private String trayId;
    private Double trayWeight;
    private Double trayAndSampleWeightBefore;
    private Double  trayAndSampleWeightAfter;
    private Double  trayAndSampleWeightAfterPlus;
    private String date;
}
