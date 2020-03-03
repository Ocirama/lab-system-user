package lt.ocirama.labsystem.model.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "ash_log")
public class AshEntity extends AbstractEntity {

    @Column(name = "dish_id", length = 50)
    private String dishId;
    @Column(name = "dish_weight")
    private double dishWeight;
    @Column(name = "total_dish_weight_before")
    private double dishAndSampleWeightBefore;
    @Column(name = "total_dish_weight_after")
    private double dishAndSampleWeightAfter;

    @ManyToOne
    @JoinColumn(name = "tray_id")
    private TrayEntity tray;

}
