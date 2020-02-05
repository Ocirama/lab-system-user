package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class Sample {
    private Integer id;
    private String protocolId;
    private String sampleId;
    private Double weight;
    //private LocalDate date;
}
