package lt.ocirama.labsystem.model.entities;

import javax.persistence.*;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "total_moisture_log")
public class TotalMoistureEntity extends AbstractEntity {

    @Column(name = "tray_weight", nullable = false)
    private double trayWeight;
    @Column(name = "total_tray_weight_before", nullable = false)
    private double trayAndSampleWeightBefore;
    @Column(name = "total_tray_weight_after", nullable = false)
    private double trayAndSampleWeightAfter;
    @Column(name = "total_tray_weight_after_plus", nullable = false)
    private double trayAndSampleWeightAfterPlus;

    @ManyToOne (cascade = CascadeType.ALL)
    @JoinColumn(name = "tray_id")
    private TrayEntity tray;



}

