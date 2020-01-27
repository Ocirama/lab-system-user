package lt.ocirama.labsystem.model;


import java.util.ArrayList;
import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
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

    @OneToMany(cascade = {CascadeType.ALL},mappedBy = "order",orphanRemoval = true)
    private List<SampleEntity> samples = new ArrayList<>();

}
