package lt.ocirama.labsystem.model;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "tray_log")
public class TrayEntity extends AbstractEntity {

    @Column(name = "tray_id", length = 50)
    private String trayId;

    @OneToMany(mappedBy = "tray", cascade = CascadeType.ALL)
    private List<TotalMoistureEntity> totalMoistureEntities;

    @OneToMany(mappedBy = "tray", cascade = CascadeType.ALL)
    private List<GeneralMoistureEntity> generalMoistureEntities;

    @OneToMany(mappedBy = "tray", cascade = CascadeType.ALL)
    private List<AshEntity> ashEntities;

    @ManyToOne
    @JoinColumn(name = "sample_id")
    private SampleEntity sample;


}
