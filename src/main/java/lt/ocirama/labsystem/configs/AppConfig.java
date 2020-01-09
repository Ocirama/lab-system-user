package lt.ocirama.labsystem.configs;

import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages = {"lt.ocirama.labsystem"})
@Slf4j
public class AppConfig {

}
