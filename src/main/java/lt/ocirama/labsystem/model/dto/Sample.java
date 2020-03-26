package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lt.ocirama.labsystem.model.entities.OrderEntity;

@Getter
@Setter
@AllArgsConstructor
public class Sample {

    private Integer id;
    private String protocolId;
    private String sampleId;
    private Double sampleWeight;
    //private LocalDate date;
}
