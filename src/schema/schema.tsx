import { Address } from './entity/address';
import { Attribute } from './entity/attribute';
import { Auction } from './entity/auction';
import { Brand } from './entity/brand';
import { Classifier } from './entity/classifier';
import { Facility } from './entity/facility';
import { HashTag } from './entity/hashTag';
import { HashTagUsage } from './entity/hashTagUsage';
import { MercariBrand } from './entity/mercariBrand';
import { MercariCategory } from './entity/mercariCategory';
import { MercariTaxonomy } from './entity/mercariTaxonomy';
import { SelfStorage } from './entity/selfStorage';
import { SquareFootage } from './entity/squareFootage';
import { Barcode } from './entity/barcode';
import { Bin } from './entity/bin';
import { CustomItemField } from './entity/customItemField';
import { IncludedItem } from './entity/includedItem';
import { ClothingCare } from './entity/clothingCare';
import { MadeOfSection } from './entity/madeOfSection';
import { Product } from './entity/product';
import { Connector } from './entity/connector';
import { CurrentSetting } from './entity/currentSetting';
import { MinMax } from './entity/minMax';
import { Sku } from './entity/sku';
import { ProductImage } from './entity/productImage';
import { Facing } from './entity/facing';
import { Shipping } from './entity/shipping';
import { Piece } from './entity/piece';
import { Draft } from './entity/draft';
import { CustomItemFieldValue } from './entity/customItemFieldValue';
import { CustomItemFieldType } from './entity/customItemFieldType';
import { CustomItemFieldTypes } from './entity/customItemFieldTypes';
import { Dimension } from './entity/capacity';
import { Attachment } from './entity/attachment';
import { ApparelSize } from './entity/apparelSize';
import { Track } from './entity/track';

export const schema: (MyClass<any> | Realm.ObjectSchema)[] = [
    SelfStorage,
    Facility,
    Address, 
    Auction,
    HashTagUsage,
    HashTag,
    MercariBrand,
    Brand,
    SquareFootage,
    MercariCategory,
    ApparelSize,
    MercariTaxonomy,
    Attribute,
    Classifier,
    Barcode,
    Bin,
    IncludedItem,
    CustomItemField,
    CustomItemFieldValue,
    CustomItemFieldType,
    CustomItemFieldTypes,
    ClothingCare,
    MadeOfSection,
    Track,
    Product,
    Connector,
    CurrentSetting,
    MinMax,
    Shipping,
    Facing,
    ProductImage,
    Sku,
    Piece,
    Draft,
    Dimension,
    Attachment
];
