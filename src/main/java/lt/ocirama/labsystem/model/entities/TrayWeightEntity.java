package lt.ocirama.labsystem.model.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lt.ocirama.labsystem.model.entities.AbstractEntity;

@Setter
@Getter
@Entity
@Table(name = "tray_weight_log")
public class TrayWeightEntity extends AbstractEntity {

    @Column(name = "tray_id", length = 50)
    private String trayId;

    @Column(name = "tray_weight", nullable = false)
    private double trayWeight;

}