import { GroupModel } from './group.model';
import { UserModel } from './user.model';

export interface GroupDetailModel {
    grupo: GroupModel;
    usuarios: Array<UserModel>;
}
