import { MRT_ColumnDef, MRT_RowData, createMRTColumnHelper } from 'material-react-table';
import { IProduct } from '../../../types';
import { col } from '../../defs/col';
import { groupCol } from '../../defs/groupCol';
import { doubleMeasureColumns, intMeasureColumns } from './measureColumns';
export const h = createMRTColumnHelper<IProduct>();
export const helper = col(h);

export const electronicsVisualCameraDetails: <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) => MRT_ColumnDef<T>[] = <T extends MRT_RowData>(...dependencies: IDependency<T, any>[]) =>
    [
        helper.listOfEnum(...dependencies)('autoFocusTechnology', 'Auto Focus Technology', { enumKey: 'autofocusTechnologies' }),
        helper.int(...dependencies)('displayResolution', 'Display Resolution', { min: 0 }),
        helper.listOfEnum(...dependencies)('photoSensorTechnology', 'Photo Sensor Technology', { enumKey: 'photoSensorTechnologies' }),
        helper.enum(...dependencies)('whiteBalanceSetting', 'White Balance Setting', { enumKey: 'whiteBalanceSettings' }),
        helper.enum(...dependencies)('jpegQualityLevel', 'JPEG Quality Level', { enumKey: 'jpegQualityLevels' }),
        helper.listOfEnum(...dependencies)('videoCaptureFormats', 'Video Capture Formats', { enumKey: 'videoCaptureFormats' }),
        helper.enum(...dependencies)('videoCaptureResolution', 'Video Capture Resolution', { enumKey: 'videoCaptureResolutions' }),
        helper.enum(...dependencies)('viewfinderType', 'Viewfinder Type', { enumKey: 'viewfinderTypes' }),
        helper.enum(...dependencies)('connectivityTechnology', 'Connectivity Technology', { enumKey: 'cameraConnectionTypes' }),
        helper.double(...dependencies)('continuousShootingSpeed', 'Continuous Shooting Speed', { min: 0 }),
        helper.int(...dependencies)('memorySlots', 'Memory Slots', { min: 0 }),
        helper.enum(...dependencies)('cameraFormFactor', 'Camera Form Factor', { enumKey: 'cameraSizes' }),
        helper.enum(...dependencies)('skillLevel', 'Skill Level', { enumKey: 'skillLevels' }),
        helper.enum(...dependencies)('lensType', 'Lens Type', { enumKey: 'lensType' }),
        helper.int(...dependencies)('opticalZoom', 'Optical Zoom', { min: 0 }),
        helper.double(...dependencies)('digitalZoom', 'Digital Zoom', { min: 0 }),
        helper.listOfEnum(...dependencies)('zoomType', 'Zoom Type', { enumKey: 'zoomTypes' }),
        helper.int(...dependencies)('autofocusPoints', 'AutoFocus Points', { min: 0 }),
        helper.listOfEnum(...dependencies)('compatibleMountings', 'Compatible Mountings', { enumKey: 'compatibleMountings' }),
        helper.enum(...dependencies)('focusType', 'Focus Type', { enumKey: 'focusTypes' }),
        helper.int(...dependencies)('expandedISOMinimum', 'Expanded ISO Minimum', { min: 0 }),
        helper.int(...dependencies)('expandedISOMaximum', 'Expanded ISO Maximum', { min: 0 }),
        helper.string(...dependencies)('maxShutterSpeed', 'Max Shutter Speed', undefined, {}),
        helper.listOfEnum(...dependencies)('shootingModes', 'Shooting Modes', { enumKey: 'shootingModes' }),
        groupCol(h, 'Photo Sensor Size', doubleMeasureColumns(h, 'lengthUnitOfMeasure'), 'photoSensorSize', 'bg-yellow-500', 'text-black')(...dependencies),
        groupCol(h, 'Effective Still Resolution', doubleMeasureColumns(h, 'resolutionUnitOfMeasure'), 'effectiveStillResolution', 'bg-yellow-500', 'text-black')(...dependencies),
        groupCol(h, 'Self Timer Duration', intMeasureColumns(h, 'musicDurationUnitOfMeasure'), 'selfTimerDuration', 'bg-yellow-500', 'text-black')(...dependencies),
        groupCol(h, 'Maximum Apeture', doubleMeasureColumns(h, 'caliperSizeUnitOfMeasure'), 'maximumApeture', 'bg-yellow-500', 'text-black')(...dependencies),
        groupCol(h, 'Min Focal Length', doubleMeasureColumns(h, 'caliperSizeUnitOfMeasure'), 'minimumFocalLength', 'bg-yellow-500', 'text-black')(...dependencies),
        groupCol(h, 'Max Focal Length', doubleMeasureColumns(h, 'caliperSizeUnitOfMeasure'), 'maximumFocalLength', 'bg-yellow-500', 'text-black')(...dependencies)
    ] as MRT_ColumnDef<T>[];
