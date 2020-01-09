package lt.ocirama.labsystem.model;


import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "order_log")
public class OrderEntity extends AbstractEntity {

    @Column(name = "protocol_id", length = 50, nullable = false)
    private String protocolId;
    @Column(name = "customer", length = 50, nullable = false)
    private String customer;
    @Column(name = "test", length = 100, nullable = false)
    private String test;
    @Column(name = "sample_type", length = 50, nullable = false)
    private String sampleType;
    @Column(name = "order_amount", nullable = false)
    private int orderAmount;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<SampleEntity> samples;

    public List<SampleEntity> getSamples() {
        return samples;
    }

}
