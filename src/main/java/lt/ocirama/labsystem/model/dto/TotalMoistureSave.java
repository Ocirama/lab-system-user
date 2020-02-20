package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TotalMoistureSave {

    private Integer id;
    private Double trayWeight;
    private Double trayAndSampleWeightBefore;
    private Double trayAndSampleWeightAfter;
    private Double trayAndSampleWeightAfterPlus;
}
