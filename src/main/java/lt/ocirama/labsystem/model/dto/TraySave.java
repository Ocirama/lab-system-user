package lt.ocirama.labsystem.model.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TraySave {

    private Integer id;
    private String trayId;
    private double trayWeight;
    //private LocalDate date;
}
