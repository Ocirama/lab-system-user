package lt.ocirama.labsystem.model;

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
@Table(name = "general_moisture_log")
public class GeneralMoistureEntity extends AbstractEntity {

    @Column(name = "jar_id",length = 50)
    private String jarId;
    @Column(name = "jar_weight")
    private double jarWeight;
    @Column(name = "total_jar_weight_before")
    private double jarAndSampleWeightBefore;
    @Column(name = "total_jar_weight_after")
    private double jarAndSampleWeightAfter;
    @Column(name = "total_jar_weight_after_plus")
    private double jarAndSampleWeightAfterPlus;

    @ManyToOne
    @JoinColumn(name = "tray_id")
    private TrayEntity tray;



}

