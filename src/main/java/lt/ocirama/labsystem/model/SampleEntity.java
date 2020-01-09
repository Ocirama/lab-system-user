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
@Table(name = "sample_log")
public class SampleEntity extends AbstractEntity {

    @Column(name = "sample_id", length = 50, nullable = false)
    private String sampleId;
    @Column(name = "sample_weight", nullable = false)
    private double sampleWeight;

    @ManyToOne
    @JoinColumn(name = "order_id")
    private OrderEntity order;

    @OneToMany(mappedBy = "sample", cascade = CascadeType.ALL)
    private List<TrayEntity> trays;


}
