package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class TotalMoisture {
    private Integer id;
    private String protocolId;
    private String sampleId;
    private String trayId;
    private Double trayWeight;
    private Double trayAndSampleWeightBefore;
    private Double  trayAndSampleWeightAfter;
    private Double  trayAndSampleWeightAfterPlus;
}
