package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Date;


@Getter
@Setter
@Builder
public class Result {
    private Integer id;
    private String customerId;
    private String protocolId;
    private String sampleId;
    private double ashValue;
    private double totalMoistureValue;
    private int calorificValue;
    private Date date;
}
