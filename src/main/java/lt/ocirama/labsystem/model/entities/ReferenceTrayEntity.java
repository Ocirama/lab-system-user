package lt.ocirama.labsystem.model.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "reference_tray_log")
public class ReferenceTrayEntity extends AbstractEntity {

    @Column(name = "reference_tray_id", length = 50, nullable = false)
    private String referenceTrayId;

    @Column(name = "reference_tray_weight_before")
    private double referenceTrayWeightBefore;

    @Column(name = "reference_tray_weight_after")
    private double referenceTrayWeightAfter;


}
