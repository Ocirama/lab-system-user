package lt.ocirama.labsystem.model.entities;


import lombok.*;

import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;



@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "results")
public class ResultEntity extends AbstractEntity {

    @Column(name = "customer_id", length = 50, nullable = false)
    private String customerId;
    @Column(name = "protocol_id", length = 50, nullable = false)
    private String protocolId;
    @Column(name = "sample_id", length = 50, nullable = false)
    private String sampleId;
    @Column(name = "ash_value")
    private double ashValue;
    @Column(name = "total_moisture_value")
    private double totalMoistureValue;
    @Column(name = "calorific_Value")
    private int calorificValue;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

}
