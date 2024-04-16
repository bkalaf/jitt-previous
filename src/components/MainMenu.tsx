import { List, MenuItem, MenuList } from '@mui/material';
import { CategoryMenuItem } from './CategoryMenuItem';
import { RootCategoryMenuItem } from './RootCategoryMenuItem';
import { MainMenuItem } from './MainMenuItem';

// const mainMenuOptions = {
//     auctions: {
//         selfStorage: $.selfStorage(),
//         facility: $.facility(),
//         auction: $.auction()
//     },
//     mercari: {
//         hashTag: $.hashTag(),
//         mercariBrand: $.mercariBrand(),
//         mercariTaxonomy: $.mercariTaxonomy()
//     },
//     products: {
//         brand: $.brand(),
//         classifier: $.classifier(),
//         productImages: $.productImage(),
//         product: $.product()
//     },
//     inventory: {
//         barcode: $.barcode(),
//         bin: $.bin(),
//         sku: $.sku()
//     },
//     listings: {
//         draft: $.draft(),
//         listing: $.listing()
//     }
// };

export function MainMenu() {
    return (
        <List component='nav' className='grid grid-cols-2'>
            <RootCategoryMenuItem header='Data' direction='down'>
                <MenuList dense>
                    <CategoryMenuItem direction='right' Component={MenuItem} label='Auctions'>
                        <MenuList dense>
                            <MainMenuItem segment='selfStorage' />
                            <MainMenuItem segment='facility' />
                            <MainMenuItem segment='auction' />
                        </MenuList>
                    </CategoryMenuItem>
                    <CategoryMenuItem direction='right' Component={MenuItem} label='Mercari'>
                        <MenuList dense>
                            <MainMenuItem segment='hashTag' />
                            <MainMenuItem segment='mercariBrand' />
                            <MainMenuItem segment='mercariTaxonomy' />
                        </MenuList>
                    </CategoryMenuItem>
                    <CategoryMenuItem direction='right' Component={MenuItem} label='Products'>
                        <MenuList dense>
                            <MainMenuItem segment='brand' />
                            <MainMenuItem segment='classifier' />
                            <MainMenuItem segment='product' />
                            <MainMenuItem segment='productImage' />
                        </MenuList>
                    </CategoryMenuItem>
                </MenuList>
            </RootCategoryMenuItem>
        </List>
    );
}
