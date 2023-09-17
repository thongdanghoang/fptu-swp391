package fptu.swp391.shoppingcart.user.authentication.mapping;

import fptu.swp391.shoppingcart.IMapper;
import fptu.swp391.shoppingcart.user.authentication.dto.UserRegisterDTO;
import fptu.swp391.shoppingcart.user.authentication.entity.UserEntity;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
@Component
public abstract class UserMapper implements IMapper<UserEntity, UserRegisterDTO> {
    @Override
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "authorities", ignore = true)
    public abstract UserEntity toEntity(UserRegisterDTO userRegisterDTO);

    @Override
    public List<UserEntity> toEntities(List<UserRegisterDTO> userRegisterDTOS) {
        return userRegisterDTOS.stream().map(this::toEntity).collect(Collectors.toList());
    }

    @Override
    @InheritInverseConfiguration
    @Mapping(target = "password", ignore = true)
    @Mapping(target = "authorities", ignore = true)
    public abstract UserRegisterDTO toDTO(UserEntity userEntity);

    @Override
    public List<UserRegisterDTO> toDTOs(List<UserEntity> entities) {
        return entities.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
