const fields = [
{
        header: null,
        importance: 117,
        index: 0,
        key: 'product.flags-isRare',
        params: {
	"key": "isRare",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 118,
        index: 1,
        key: 'product.flags-isVintage',
        params: {
	"key": "isVintage",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 119,
        index: 2,
        key: 'product.flags-isUnopened',
        params: {
	"key": "isUnopened",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: 'Quantity',
        importance: 10,
        index: 3,
        key: 'quantity',
        params: {
	"text": "x"
},
        getter: (sku: ISku) => sku?.quantity,
        func: $from.intOverOne,
        titleFunc: $from.quantity,
        section: "attributes"
    },
{
        header: 'Brand',
        importance: 8,
        index: 4,
        key: 'product.brand',
        params: Brand,
        getter: (sku: ISku) => sku?.product?.brand,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "attributes"
    },
{
        header: 'Gender',
        importance: 4,
        index: 5,
        key: 'product.gender',
        params: "genders",
        getter: (sku: ISku) => sku?.product?.gender,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: null,
        importance: 41,
        index: 6,
        key: 'product.primaryColor',
        params: "productColors",
        getter: (sku: ISku) => sku?.product?.primaryColor,
        func: null,
        titleFunc: $from.enum,
        section: "none"
    },
{
        header: 'Closure Type',
        importance: 76,
        index: 7,
        key: 'product.closureType',
        params: "closureTypes",
        getter: (sku: ISku) => sku?.product?.closureType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Toe Style',
        importance: 71,
        index: 8,
        key: 'product.toeStyle',
        params: "toeStyles",
        getter: (sku: ISku) => sku?.product?.toeStyle,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Height Map Type',
        importance: 74,
        index: 9,
        key: 'product.heightMapType',
        params: "heightMaps",
        getter: (sku: ISku) => sku?.product?.heightMapType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Shoe Heel Type',
        importance: 53,
        index: 10,
        key: 'product.shoeHeelType',
        params: "shoeHeelTypes",
        getter: (sku: ISku) => sku?.product?.shoeHeelType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Fit Type',
        importance: 77,
        index: 11,
        key: 'product.fitType',
        params: "fitTypes",
        getter: (sku: ISku) => sku?.product?.fitType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Collar Type',
        importance: 52,
        index: 12,
        key: 'product.collarType',
        params: "collarTypes",
        getter: (sku: ISku) => sku?.product?.collarType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Neck Type',
        importance: 70,
        index: 13,
        key: 'product.neckType',
        params: "neckTypes",
        getter: (sku: ISku) => sku?.product?.neckType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Lifestyle Type',
        importance: 42,
        index: 14,
        key: 'product.lifestyleType',
        params: "lifestyleTypes",
        getter: (sku: ISku) => sku?.product?.lifestyleType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Pocket Type',
        importance: 35,
        index: 15,
        key: 'product.pocketType',
        params: "pocketTypes",
        getter: (sku: ISku) => sku?.product?.pocketType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Rise Type',
        importance: 50,
        index: 16,
        key: 'product.riseType',
        params: "riseTypes",
        getter: (sku: ISku) => sku?.product?.riseType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Backline Type',
        importance: 78,
        index: 17,
        key: 'product.backlineType',
        params: "backlineTypes",
        getter: (sku: ISku) => sku?.product?.backlineType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Sleeve Type',
        importance: 69,
        index: 18,
        key: 'product.sleeveType',
        params: "sleeveTypes",
        getter: (sku: ISku) => sku?.product?.sleeveType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Cuff Type',
        importance: 55,
        index: 19,
        key: 'product.cuffType',
        params: "cuffTypes",
        getter: (sku: ISku) => sku?.product?.cuffType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Sleeve Length',
        importance: 28,
        index: 20,
        key: 'product.sleeveLength',
        params: "sleeveLengths",
        getter: (sku: ISku) => sku?.product?.sleeveLength,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Leg Style',
        importance: 29,
        index: 21,
        key: 'product.legStyle',
        params: "legStyles",
        getter: (sku: ISku) => sku?.product?.legStyle,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Length Type',
        importance: 24,
        index: 22,
        key: 'product.lengthType',
        params: "garmentLengths",
        getter: (sku: ISku) => sku?.product?.lengthType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Dress Type',
        importance: 30,
        index: 23,
        key: 'product.dressType',
        params: "dressTypes",
        getter: (sku: ISku) => sku?.product?.dressType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Shoe Width',
        importance: 57,
        index: 24,
        key: 'product.shoeWidth',
        params: "shoeWidths",
        getter: (sku: ISku) => sku?.product?.shoeWidth,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Strap Type',
        importance: 68,
        index: 25,
        key: 'product.strapType',
        params: "strapTypes",
        getter: (sku: ISku) => sku?.product?.strapType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Boot Type',
        importance: 32,
        index: 26,
        key: 'product.bootType',
        params: "bootTypes",
        getter: (sku: ISku) => sku?.product?.bootType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Suit Type',
        importance: 31,
        index: 27,
        key: 'product.suitType',
        params: "suitTypes",
        getter: (sku: ISku) => sku?.product?.suitType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Swimsuit Bottom Style',
        importance: 48,
        index: 28,
        key: 'product.swimsuitBottomStyle',
        params: "swimsuitBottomStyles",
        getter: (sku: ISku) => sku?.product?.swimsuitBottomStyle,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Swimsuit Top Style',
        importance: 49,
        index: 29,
        key: 'product.swimsuitTopStyle',
        params: "swimsuitTopStyles",
        getter: (sku: ISku) => sku?.product?.swimsuitTopStyle,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Text',
        importance: 47,
        index: 30,
        key: 'product.text',
        params: null,
        getter: (sku: ISku) => sku?.product?.text,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Size',
        importance: 27,
        index: 31,
        key: 'product.size',
        params: "text",
        getter: (sku: ISku) => sku?.product?.size,
        func: $from.size,
        titleFunc: $from.size,
        section: "attributes"
    },
{
        header: null,
        importance: 72,
        index: 32,
        key: 'product?.$title',
        params: null,
        getter: (sku: ISku) => sku?.product?.$title,
        func: null,
        titleFunc: $from.echo,
        section: "none"
    },
{
        header: null,
        importance: 73,
        index: 33,
        key: 'product?.$subtitle',
        params: {
	"text": ": "
},
        getter: (sku: ISku) => sku?.product?.$subtitle,
        func: null,
        titleFunc: $from.prepend,
        section: "none"
    },
{
        header: 'Console Type',
        importance: 25,
        index: 34,
        key: 'product.consoleType',
        params: "consoleTypes",
        getter: (sku: ISku) => sku?.product?.consoleType,
        func: $from.enum,
        titleFunc: $from.for,
        section: "attributes"
    },
{
        header: 'Edition',
        importance: 58,
        index: 35,
        key: 'product.edition',
        params: null,
        getter: (sku: ISku) => sku?.product?.edition,
        func: $from.edition.narrative,
        titleFunc: $from.edition.title,
        section: "attributes"
    },
{
        header: null,
        importance: 120,
        index: 36,
        key: 'product.flags-isDirectorsEdition',
        params: {
	"key": "isDirectorsEdition",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 121,
        index: 37,
        key: 'product.flags-isCollectorsEdition',
        params: {
	"key": "isCollectorsEdition",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 122,
        index: 38,
        key: 'product.flags-isWidescreen',
        params: {
	"key": "isWidescreen",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 82,
        index: 39,
        key: 'product?.$copyrightFormat',
        params: null,
        getter: (sku: ISku) => sku?.product?.$copyrightFormat,
        func: null,
        titleFunc: $from.parentheses,
        section: "none"
    },
{
        header: 'Disc/Tape Count',
        importance: 75,
        index: 40,
        key: 'product.count',
        params: null,
        getter: (sku: ISku) => sku?.product?.count,
        func: $from.discCount,
        titleFunc: $from.discCount,
        section: "attributes"
    },
{
        header: 'Rating',
        importance: 83,
        index: 41,
        key: 'product?.$rating',
        params: null,
        getter: (sku: ISku) => sku?.product?.$rating,
        func: $from.echo,
        titleFunc: $from.squareBracket,
        section: "attributes"
    },
{
        header: 'Author(s)',
        importance: 84,
        index: 42,
        key: 'contributors.author',
        params: {
	"role": "author",
	"sep": ", "
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.by,
        section: "attributes"
    },
{
        header: 'Performed By',
        importance: 85,
        index: 43,
        key: 'contributors.performer',
        params: {
	"role": "performer",
	"sep": ", "
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.contributor,
        section: "attributes"
    },
{
        header: 'Material',
        importance: 66,
        index: 44,
        key: 'product.material',
        params: "materials",
        getter: (sku: ISku) => sku?.product?.material,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Shaft Type',
        importance: 65,
        index: 45,
        key: 'product.shaftType',
        params: "shaftTypes",
        getter: (sku: ISku) => sku?.product?.shaftType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Iron Type',
        importance: 34,
        index: 46,
        key: 'product.ironType',
        params: "ironTypes",
        getter: (sku: ISku) => sku?.product?.ironType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Wedge Type',
        importance: 36,
        index: 47,
        key: 'product.wedgeType',
        params: "wedgeTypes",
        getter: (sku: ISku) => sku?.product?.wedgeType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Club Type',
        importance: 33,
        index: 48,
        key: 'product.clubType',
        params: "clubTypes",
        getter: (sku: ISku) => sku?.product?.clubType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Flex Type',
        importance: 172,
        index: 49,
        key: 'product.flexType',
        params: "flexTypes",
        getter: (sku: ISku) => sku?.product?.flexType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Orientation',
        importance: 45,
        index: 50,
        key: 'product.handOrientation',
        params: "handOrientations",
        getter: (sku: ISku) => sku?.product?.handOrientation,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Drive Form Factor',
        importance: 185,
        index: 51,
        key: 'product.driveForm',
        params: "driveFormFactors",
        getter: (sku: ISku) => sku?.product?.driveForm,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Memory Type',
        importance: 80,
        index: 52,
        key: 'product.memoryType',
        params: "memoryTypes",
        getter: (sku: ISku) => sku?.product?.memoryType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Capacity (GB)',
        importance: 79,
        index: 53,
        key: 'product.capacity',
        params: "capacityUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.capacity,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Memory Speed',
        importance: 81,
        index: 54,
        key: 'product.memorySpeed',
        params: "memorySpeedUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.memorySpeed,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Data Transfer Bandwidth',
        importance: 86,
        index: 55,
        key: 'product.dataTransferBandwidth',
        params: null,
        getter: (sku: ISku) => sku?.product?.dataTransferBandwidth,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'CAS Latency',
        importance: 91,
        index: 56,
        key: 'product.CASLatency',
        params: "casLatency",
        getter: (sku: ISku) => sku?.product?.CASLatency,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Battery',
        importance: 101,
        index: 57,
        key: 'product.batteryStats',
        params: CurrentSetting,
        getter: (sku: ISku) => sku?.product?.batteryStats,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "attributes"
    },
{
        header: 'Memory Form Factor',
        importance: 90,
        index: 58,
        key: 'product.memoryForm',
        params: "memoryFormFactors",
        getter: (sku: ISku) => sku?.product?.memoryForm,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Pin Count',
        importance: 92,
        index: 59,
        key: 'product.pinCount',
        params: {
	"text": "pin"
},
        getter: (sku: ISku) => sku?.product?.pinCount,
        func: $from.append,
        titleFunc: $from.append,
        section: "attributes"
    },
{
        header: 'Compatible Devices',
        importance: 56,
        index: 60,
        key: 'product.compatibleDevices',
        params: "compatibleDevices",
        getter: (sku: ISku) => sku?.product?.compatibleDevices,
        func: $from.list.ofEnum,
        titleFunc: $from.list.ofEnum,
        section: "attributes"
    },
{
        header: 'Rotational Speed',
        importance: 187,
        index: 61,
        key: 'product.rpm',
        params: "rotationalSpeedUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.rpm,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Drive Interface',
        importance: 186,
        index: 62,
        key: 'product.driveInterface',
        params: "driveInterfaces",
        getter: (sku: ISku) => sku?.product?.driveInterface,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Cache Size',
        importance: 188,
        index: 63,
        key: 'product.cacheSize',
        params: "capacityUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.cacheSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Drive Type',
        importance: 184,
        index: 68,
        key: 'product.driveType',
        params: "driveTypes",
        getter: (sku: ISku) => sku?.product?.driveType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Connectors',
        importance: 59,
        index: 64,
        key: 'product.connectors',
        params: Connector,
        getter: (sku: ISku) => sku?.product?.connectors,
        func: $from.list.ofLookup,
        titleFunc: $from.list.ofLookup,
        section: "attributes"
    },
{
        header: 'Cable Type',
        importance: 51,
        index: 65,
        key: 'product.cableType',
        params: "cableTypes",
        getter: (sku: ISku) => sku?.product?.cableType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Cord Length',
        importance: 131,
        index: 66,
        key: 'product.cordLength',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.cordLength,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Model #',
        importance: 67,
        index: 67,
        key: 'product.modelNo',
        params: null,
        getter: (sku: ISku) => sku?.product?.modelNo,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: null,
        importance: 39,
        index: 69,
        key: 'product.dinnerwareInventory',
        params: "dinnerwareTypes",
        getter: (sku: ISku) => sku?.product?.dinnerwareInventory,
        func: null,
        titleFunc: null,
        section: "none"
    },
{
        header: null,
        importance: 38,
        index: 70,
        key: 'product.flatwareInventory',
        params: "flatwareTypes",
        getter: (sku: ISku) => sku?.product?.flatwareInventory,
        func: null,
        titleFunc: null,
        section: "none"
    },
{
        header: 'Pattern',
        importance: 46,
        index: 71,
        key: 'product.pattern',
        params: null,
        getter: (sku: ISku) => sku?.product?.pattern,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Model Name',
        importance: 26,
        index: 72,
        key: 'product.modelName',
        params: null,
        getter: (sku: ISku) => sku?.product?.modelName,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Metal Type',
        importance: 97,
        index: 73,
        key: 'product.metal',
        params: "metalTypes",
        getter: (sku: ISku) => sku?.product?.metal,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Appliance Type',
        importance: 23,
        index: 74,
        key: 'product.applianceType',
        params: "applianceTypes",
        getter: (sku: ISku) => sku?.product?.applianceType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Battery Type',
        importance: 98,
        index: 75,
        key: 'product.batteryType',
        params: "batteryTypes",
        getter: (sku: ISku) => sku?.product?.batteryType,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: null,
        importance: 3,
        index: 76,
        key: 'product.description',
        params: null,
        getter: (sku: ISku) => sku?.product?.description,
        func: null,
        titleFunc: $from.echo,
        section: "none"
    },
{
        header: null,
        importance: 2,
        index: 77,
        key: 'product.itemType',
        params: null,
        getter: (sku: ISku) => sku?.product?.itemType,
        func: null,
        titleFunc: $from.echo,
        section: "none"
    },
{
        header: 'Title',
        importance: 1,
        index: null,
        key: 'product.title',
        params: null,
        getter: (sku: ISku) => sku?.product?.title,
        func: null,
        titleFunc: null,
        section: "attributes"
    },
{
        header: 'Output',
        importance: 37,
        index: null,
        key: 'product.output',
        params: CurrentSetting,
        getter: (sku: ISku) => sku?.product?.output,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "attributes"
    },
{
        header: 'Heel Height',
        importance: 54,
        index: null,
        key: 'product.heelHeight',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.heelHeight,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Dimensions',
        importance: 60,
        index: null,
        key: 'product.$dims',
        params: null,
        getter: (sku: ISku) => sku?.product?.$dims,
        func: $from.dimension,
        titleFunc: $from.dimension,
        section: "attributes"
    },
{
        header: 'Country of Origin',
        importance: 61,
        index: null,
        key: 'product.origin',
        params: "countries",
        getter: (sku: ISku) => sku?.product?.origin,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Manufacture Date',
        importance: 62,
        index: null,
        key: 'product.manufactureDate',
        params: MonthYear,
        getter: (sku: ISku) => sku?.product?.manufactureDate,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "attributes"
    },
{
        header: 'Operating System',
        importance: 63,
        index: null,
        key: 'product.operatingSystem',
        params: OperatingSystemInfo,
        getter: (sku: ISku) => sku?.product?.operatingSystem,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "attributes"
    },
{
        header: 'ESRB Rating',
        importance: 64,
        index: null,
        key: 'product.ESRBRating',
        params: ESRBRatings,
        getter: (sku: ISku) => sku?.product?.ESRBRating,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Copyright',
        importance: 146,
        index: null,
        key: 'product?.$copyright',
        params: null,
        getter: (sku: ISku) => sku?.product?.$copyright,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Format',
        importance: 88,
        index: null,
        key: 'product?.$format',
        params: null,
        getter: (sku: ISku) => sku?.product?.$format,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Title',
        importance: 89,
        index: null,
        key: 'product?.$titleSubtitle',
        params: null,
        getter: (sku: ISku) => sku?.product?.$titleSubtitle,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Weight',
        importance: 93,
        index: null,
        key: 'product.weight',
        params: "weightUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.weight,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Screen Size',
        importance: 95,
        index: null,
        key: 'product.screenSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.screenSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Battery Count',
        importance: 96,
        index: null,
        key: 'product.batteryCount',
        params: null,
        getter: (sku: ISku) => sku?.product?.batteryCount,
        func: $from.int,
        titleFunc: $from.int,
        section: "attributes"
    },
{
        header: 'Battery Capacity',
        importance: 100,
        index: null,
        key: 'product.batteryCapacity',
        params: "powerConsumptionUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.batteryCapacity,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Input',
        importance: 102,
        index: null,
        key: 'product.input',
        params: CurrentSetting,
        getter: (sku: ISku) => sku?.product?.input,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "attributes"
    },
{
        header: 'Rate of Energy Capacity',
        importance: 103,
        index: null,
        key: 'product.rateOfEnergyCapacity',
        params: "rateOfEnergyCapacityUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.rateOfEnergyCapacity,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Density',
        importance: 104,
        index: null,
        key: 'product.density',
        params: "densityUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.density,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: null,
        importance: 105,
        index: null,
        key: 'product.massInAir',
        params: "weightUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.massInAir,
        func: null,
        titleFunc: null,
        section: "none"
    },
{
        header: null,
        importance: 106,
        index: null,
        key: 'product.massWaterDisplaced',
        params: "weightUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.massWaterDisplaced,
        func: null,
        titleFunc: null,
        section: "none"
    },
{
        header: 'Defects',
        importance: 107,
        index: null,
        key: 'defects',
        params: null,
        getter: (sku: ISku) => sku?.defects,
        func: $from.list.ofBullet,
        titleFunc: $from.list.ofBullet,
        section: "lists"
    },
{
        header: 'Runtime',
        importance: 108,
        index: null,
        key: 'product.movie.runtime',
        params: "movieRuntimeUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.movie?.runtime,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'UPCs',
        importance: 109,
        index: null,
        key: 'product.upcs-upc',
        params: "upc",
        getter: (sku: ISku) => sku?.product?.upcs,
        func: $from.barcode,
        titleFunc: $from.barcode,
        section: "attributes"
    },
{
        header: 'ISBN-10',
        importance: 110,
        index: null,
        key: 'product.upcs-isbn-10',
        params: "isbn-10",
        getter: (sku: ISku) => sku?.product?.upcs,
        func: $from.barcode,
        titleFunc: $from.barcode,
        section: "attributes"
    },
{
        header: 'ISBN-13',
        importance: 111,
        index: null,
        key: 'product.upcs-isbn-13',
        params: "isbn-13",
        getter: (sku: ISku) => sku?.product?.upcs,
        func: $from.barcode,
        titleFunc: $from.barcode,
        section: "attributes"
    },
{
        header: 'EANs',
        importance: 112,
        index: null,
        key: 'product.upcs-ean',
        params: "ean",
        getter: (sku: ISku) => sku?.product?.upcs,
        func: $from.barcode,
        titleFunc: $from.barcode,
        section: "attributes"
    },
{
        header: 'Waist Measurement',
        importance: 113,
        index: null,
        key: 'product.waistSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.waistSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Sleeve Measurement',
        importance: 114,
        index: null,
        key: 'product.sleeveSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.sleeveSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Neck Measurement',
        importance: 115,
        index: null,
        key: 'product.neckSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.neckSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Length Measurment',
        importance: 116,
        index: null,
        key: 'product.lengthSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.lengthSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Inseam Measurement',
        importance: 123,
        index: null,
        key: 'product.inseamSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.inseamSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Genre',
        importance: 124,
        index: null,
        key: 'product.book.genre',
        params: "bookGenres",
        getter: (sku: ISku) => sku?.product?.book?.genre,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Genre',
        importance: 125,
        index: null,
        key: 'product.movie.genre',
        params: "movieGenres",
        getter: (sku: ISku) => sku?.product?.movie?.genre,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Network',
        importance: 126,
        index: null,
        key: 'product.tvSeries.network',
        params: "networks",
        getter: (sku: ISku) => sku?.product?.tvSeries?.network,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Genre',
        importance: 127,
        index: null,
        key: 'product.tvSeries.genre',
        params: "movieGenres",
        getter: (sku: ISku) => sku?.product?.tvSeries?.genre,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Genre',
        importance: 128,
        index: null,
        key: 'product.album.genre',
        params: "musicGenres",
        getter: (sku: ISku) => sku?.product?.album?.genre,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Foot Measurement',
        importance: 129,
        index: null,
        key: 'product.footSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.footSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Features',
        importance: 130,
        index: null,
        key: 'product.features',
        params: null,
        getter: (sku: ISku) => sku?.product?.features,
        func: $from.list.ofBullet,
        titleFunc: $from.list.ofBullet,
        section: "lists"
    },
{
        header: 'Club Length',
        importance: 132,
        index: null,
        key: 'product.clubLength',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.clubLength,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Chest  Measurement',
        importance: 133,
        index: null,
        key: 'product.chestSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.chestSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Made Of',
        importance: 134,
        index: null,
        key: 'product.madeOf',
        params: MadeOfSection,
        getter: (sku: ISku) => sku?.product?.madeOf,
        func: $from.list.ofLookup,
        titleFunc: $from.list.ofLookup,
        section: "attributes"
    },
{
        header: 'Includes',
        importance: 135,
        index: null,
        key: 'product.includes',
        params: IncludedItem,
        getter: (sku: ISku) => sku?.product?.includes,
        func: $from.mappedLookup.prependPlus,
        titleFunc: $from.mappedLookup.prependPlus,
        section: "lists"
    },
{
        header: 'Piece Count',
        importance: 136,
        index: null,
        key: 'product.pieceCount',
        params: null,
        getter: (sku: ISku) => sku?.product?.pieceCount,
        func: $from.int,
        titleFunc: $from.int,
        section: "attributes"
    },
{
        header: 'Episodes',
        importance: 137,
        index: null,
        key: 'product.tvSeries.episodes',
        params: TvSeriesEpisode,
        getter: (sku: ISku) => sku?.product?.tvSeries?.episodes,
        func: $from.list.ofLookup,
        titleFunc: $from.list.ofLookup,
        section: "lists"
    },
{
        header: null,
        importance: 138,
        index: null,
        key: 'product.flags-inOriginalPackaging',
        params: {
	"key": "inOriginalPackaging",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: 'Awards',
        importance: 139,
        index: null,
        key: 'product?.$awards',
        params: BaseAward,
        getter: (sku: ISku) => sku?.product?.$awards,
        func: $from.list.ofLookup,
        titleFunc: $from.list.ofLookup,
        section: "lists"
    },
{
        header: 'Power Types',
        importance: 140,
        index: null,
        key: 'product.powerTypes',
        params: "powerTypes",
        getter: (sku: ISku) => sku?.product?.powerTypes,
        func: $from.list.ofEnum,
        titleFunc: $from.list.ofEnum,
        section: "attributes"
    },
{
        header: 'Aspect Ratio',
        importance: 141,
        index: null,
        key: 'product.aspectRatio',
        params: "aspectRatios",
        getter: (sku: ISku) => sku?.product?.aspectRatio,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "specifications"
    },
{
        header: 'Bust Measurement',
        importance: 142,
        index: null,
        key: 'product.bustSize',
        params: "lengthUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.bustSize,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "measurements"
    },
{
        header: 'Clothing Care',
        importance: 143,
        index: null,
        key: 'product.clothingCare',
        params: ClothingCare,
        getter: (sku: ISku) => sku?.product?.clothingCare,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "lists"
    },
{
        header: 'Collection Of',
        importance: 144,
        index: null,
        key: 'product.collectionOf',
        params: null,
        getter: (sku: ISku) => sku?.product?.collectionOf,
        func: $from.list.ofBullet,
        titleFunc: $from.list.ofBullet,
        section: "lists"
    },
{
        header: 'Color',
        importance: 145,
        index: null,
        key: 'product.color',
        params: "productColors",
        getter: (sku: ISku) => sku?.product?.color,
        func: $from.list.ofEnum,
        titleFunc: $from.list.ofEnum,
        section: "attributes"
    },
{
        header: null,
        importance: 147,
        index: null,
        key: 'product.flags-isSubtitled',
        params: {
	"key": "isSubtitled",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 148,
        index: null,
        key: 'product.flags-isClosedCaptioned',
        params: {
	"key": "isClosedCaptioned",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 149,
        index: null,
        key: 'product.flags-isUnrated',
        params: {
	"key": "isUnrated",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 150,
        index: null,
        key: 'product.flags-isMediaMail',
        params: {
	"key": "isMediaMail",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 151,
        index: null,
        key: 'product.flags-isDiscontinued',
        params: {
	"key": "isDiscontinued",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 152,
        index: null,
        key: 'product.flags-isCollectible',
        params: {
	"key": "isCollectible",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 153,
        index: null,
        key: 'product.flags-hasManual',
        params: {
	"key": "hasManual",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: null,
        importance: 154,
        index: null,
        key: 'product.flags-hasInstructionManual',
        params: {
	"key": "hasInstructionManual",
	"asterisk": true
},
        getter: (sku: ISku) => sku?.product?.flags,
        func: $from.flags,
        titleFunc: $from.titleFlags,
        section: "flags"
    },
{
        header: 'Illustrator(s)',
        importance: 155,
        index: null,
        key: 'contributors.illustrator',
        params: {
	"role": "illustrator",
	"sep": ", "
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.contributor,
        section: "lists"
    },
{
        header: 'Starring',
        importance: 156,
        index: null,
        key: 'contributors.actor',
        params: {
	"role": "actor",
	"sep": "\n"
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.contributor,
        section: "lists"
    },
{
        header: 'Directed By',
        importance: 157,
        index: null,
        key: 'contributors.director',
        params: {
	"role": "director",
	"sep": ", "
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.contributor,
        section: "lists"
    },
{
        header: 'Published By',
        importance: 158,
        index: null,
        key: 'contributors.publisher',
        params: {
	"role": "publisher",
	"sep": ", "
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.contributor,
        section: "lists"
    },
{
        header: 'Produced By',
        importance: 159,
        index: null,
        key: 'contributors.producer',
        params: {
	"role": "producer",
	"sep": ", "
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.contributor,
        section: "lists"
    },
{
        header: 'Studio',
        importance: 160,
        index: null,
        key: 'contributors.studio',
        params: {
	"role": "studio",
	"sep": "\n"
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.contributor,
        section: "lists"
    },
{
        header: 'Songwriter(s)',
        importance: 161,
        index: null,
        key: 'contributors.songwriter',
        params: {
	"role": "songwriter",
	"sep": ", "
},
        getter: (sku: ISku) => sku?.product?.$contributors,
        func: $from.contributor,
        titleFunc: $from.contributor,
        section: "lists"
    },
{
        header: 'Tested On',
        importance: 162,
        index: null,
        key: 'product.testedOn',
        params: null,
        getter: (sku: ISku) => sku?.product?.testedOn,
        func: $from.date,
        titleFunc: $from.date,
        section: "specifications"
    },
{
        header: null,
        importance: 163,
        index: null,
        key: 'product.videoType',
        params: null,
        getter: (sku: ISku) => sku?.product?.videoType,
        func: null,
        titleFunc: null,
        section: "none"
    },
{
        header: 'Players',
        importance: 164,
        index: null,
        key: 'product.players',
        params: MinMax,
        getter: (sku: ISku) => sku?.product?.players,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "specifications"
    },
{
        header: 'Compatible With',
        importance: 165,
        index: null,
        key: 'product.compatibleWith',
        params: PartNumber,
        getter: (sku: ISku) => sku?.product?.compatibleWith,
        func: $from.list.ofLookup,
        titleFunc: $from.list.ofLookup,
        section: "lists"
    },
{
        header: 'Carrier',
        importance: 166,
        index: null,
        key: 'product.cellCarrier',
        params: "cellCarriers",
        getter: (sku: ISku) => sku?.product?.cellCarrier,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "specifications"
    },
{
        header: 'Tracks',
        importance: 167,
        index: null,
        key: 'product.album.tracks',
        params: Track,
        getter: (sku: ISku) => sku?.product?.album?.tracks,
        func: $from.list.ofLookup,
        titleFunc: $from.list.ofLookup,
        section: "lists"
    },
{
        header: 'Ages',
        importance: 168,
        index: null,
        key: 'product.ages',
        params: MinMax,
        getter: (sku: ISku) => sku?.product?.ages,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "attributes"
    },
{
        header: 'Language',
        importance: 169,
        index: null,
        key: 'product.language',
        params: "languages",
        getter: (sku: ISku) => sku?.product?.language,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "attributes"
    },
{
        header: 'Lie',
        importance: 170,
        index: null,
        key: 'product.lie',
        params: "angleUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.lie,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Loft',
        importance: 171,
        index: null,
        key: 'product.loft',
        params: "angleUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.loft,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Circa',
        importance: 174,
        index: null,
        key: 'product.circa',
        params: null,
        getter: (sku: ISku) => sku?.product?.circa,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Pages',
        importance: 175,
        index: null,
        key: 'product.pages',
        params: null,
        getter: (sku: ISku) => sku?.product?.pages,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Cut #',
        importance: 176,
        index: null,
        key: 'product.cutNo',
        params: null,
        getter: (sku: ISku) => sku?.product?.cutNo,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Studio',
        importance: 177,
        index: null,
        key: 'product.studio',
        params: null,
        getter: (sku: ISku) => sku?.product?.studio,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Style #',
        importance: 178,
        index: null,
        key: 'product.styleNo',
        params: null,
        getter: (sku: ISku) => sku?.product?.styleNo,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "attributes"
    },
{
        header: 'Swing Weight',
        importance: 179,
        index: null,
        key: 'product.swingWeight',
        params: "weightUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.swingWeight,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Part Numbers',
        importance: 180,
        index: null,
        key: 'product.partNumbers',
        params: PartNumber,
        getter: (sku: ISku) => sku?.product?.partNumbers,
        func: $from.list.ofLookup,
        titleFunc: $from.list.ofLookup,
        section: "lists"
    },
{
        header: 'Max Shipping Weight',
        importance: 181,
        index: null,
        key: 'getShippingRate.weight',
        params: "weightUnitOfMeasure",
        getter: (sku: ISku) => sku?.getShippingRate?.weight,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "shipping"
    },
{
        header: 'Carrier',
        importance: 182,
        index: null,
        key: 'getShippingRate.carrier',
        params: "shippers",
        getter: (sku: ISku) => sku?.getShippingRate?.carrier,
        func: $from.enum,
        titleFunc: $from.enum,
        section: "shipping"
    },
{
        header: 'Shipping Cost',
        importance: 183,
        index: null,
        key: 'getShippingRate.price',
        params: null,
        getter: (sku: ISku) => sku?.getShippingRate?.price,
        func: $from.dollar,
        titleFunc: $from.dollar,
        section: "shipping"
    },
{
        header: 'Connectivity',
        importance: 189,
        index: null,
        key: 'product.connectivity',
        params: "connectivity",
        getter: (sku: ISku) => sku?.product?.connectivity,
        func: $from.list.ofEnum,
        titleFunc: $from.list.ofEnum,
        section: "attributes"
    },
{
        header: 'SKU',
        importance: 190,
        index: null,
        key: 'product.upcs-sku',
        params: "sku",
        getter: (sku: ISku) => sku?.product?.upcs,
        func: $from.barcode,
        titleFunc: $from.barcode,
        section: "shipping"
    },
{
        header: 'Read Speed',
        importance: 191,
        index: null,
        key: 'product.readSpeed',
        params: "dataTransferRateUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.readSpeed,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Data Transfer Rate',
        importance: 192,
        index: null,
        key: 'product.dataTransferRate',
        params: "dataTransferRateUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.dataTransferRate,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'Write Speed',
        importance: 193,
        index: null,
        key: 'product.writeSpeed',
        params: "dataTransferRateUnitOfMeasure",
        getter: (sku: ISku) => sku?.product?.writeSpeed,
        func: $fromMeasure,
        titleFunc: $fromMeasure,
        section: "attributes"
    },
{
        header: 'About',
        importance: 194,
        index: null,
        key: 'product.blurb',
        params: null,
        getter: (sku: ISku) => sku?.product?.blurb,
        func: $from.echo,
        titleFunc: $from.echo,
        section: "text"
    },
{
        header: 'RN #',
        importance: 195,
        index: null,
        key: 'product.rnNo',
        params: Rn,
        getter: (sku: ISku) => sku?.product?.rnNo,
        func: $from.lookup,
        titleFunc: $from.lookup,
        section: "attributes"
    },
{
        header: 'ASINs',
        importance: 196,
        index: null,
        key: 'product.asins',
        params: null,
        getter: (sku: ISku) => sku?.product?.asins,
        func: $from.list.ofString,
        titleFunc: $from.list.ofString,
        section: "lists"
    }
]