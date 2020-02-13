package lt.ocirama.labsystem.repositories;


import lt.ocirama.labsystem.model.entities.UserEntity;
import org.springframework.data.repository.Repository;

public interface UserRepository extends Repository<UserEntity, Integer> {

    UserEntity findOneByEmail(String email);
}
