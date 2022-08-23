import { Item } from '../../types/Item';
import * as C from './styles';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';

type Props = {
    item: Item
}

export const TableItem = ({ item }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
            {/* 1:05:00     APARENTA ESTAR FUNCIONANDO MESMO COM O ERRO ACIMA */}
            {/* 1:11:54 aparece erro de item.category nao pode ser usado como index */}
        </C.TableLine>
    );
}

