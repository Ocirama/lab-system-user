package lt.ocirama.labsystem.model.dto;



import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OrderSave {

    private Integer id;
    private String protocolId;
    private String customer;
    private String test;
    private String sampleType;
    private int orderAmount;
    //private LocalDate date;
}

