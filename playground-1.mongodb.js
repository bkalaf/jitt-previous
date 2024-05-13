/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/
import { ObjectId } from 'bson';

// Select the database to use.
use('jitt');

// Insert a few documents into the sales collection.
const coll = db.getCollection('product');
const docs = coll.find({}).toArray();

function testAndFix(_id, name, value) {
    if (value != null) {
        coll.findOneAndUpdate({
            _id: _id
        }, {
            $set: {
                [name]: value
            }
        })
    }
}
docs.forEach(x => {
    // testAndFix(x._id, 'classifier', x.details?.classifier);
    if (x.classifier != null) {
        coll.findOneAndUpdate({
        _id: x._id
    }, {
        $set: new ObjectId(x.classifier)
    })
    }
    // testAndFix(x._id, 'madeOf', x.details?.apparelDetails?.madeOf);
    // testAndFix(x._id, 'gender', x.details?.apparelDetails?.gender);
    // testAndFix(x._id, 'cutNo', x.details?.apparelDetails?.cutNo);
    // testAndFix(x._id, 'styleNo', x.details?.apparelDetails?.styleNo);
    // testAndFix(x._id, 'rnNo', x.details?.apparelDetails?.rnNo);
    // testAndFix(x._id, 'text', x.details?.apparelDetails?.text);
    // testAndFix(x._id, 'clothingCare', x.details?.apparelDetails?.clothingCare);
    // testAndFix(x._id, 'closureType', x.details?.apparelDetails?.bottomDetails?.closureType);
    // testAndFix(x._id, 'fitType', x.details?.apparelDetails?.bottomDetails?.fitType);
    // testAndFix(x._id, 'inseamSize', x.details?.apparelDetails?.bottomDetails?.inseamSize);
    // testAndFix(x._id, 'legStyle', x.details?.apparelDetails?.bottomDetails?.legStyle);
    // testAndFix(x._id, 'lengthSize', x.details?.apparelDetails?.bottomDetails?.lengthSize);
    // testAndFix(x._id, 'lengthType', x.details?.apparelDetails?.bottomDetails?.lengthType);
    // testAndFix(x._id, 'lifestyleType', x.details?.apparelDetails?.bottomDetails?.lifestyleType);
    // testAndFix(x._id, 'pocketType', x.details?.apparelDetails?.bottomDetails?.pocketType);
    // testAndFix(x._id, 'riseType', x.details?.apparelDetails?.bottomDetails?.riseType);
    // testAndFix(x._id, 'waistSize', x.details?.apparelDetails?.bottomDetails?.waistSize);
    // testAndFix(x._id, 'size', x.details?.apparelDetails?.bottomDetails?.size);
    // testAndFix(x._id, 'closureType', x.details?.apparelDetails?.footwearDetails?.closureType);
    // testAndFix(x._id, 'lifestyleType', x.details?.apparelDetails?.footwearDetails?.lifestyleType);
    // testAndFix(x._id, 'size', x.details?.apparelDetails?.footwearDetails?.womensSize);
    // testAndFix(x._id, 'size', x.details?.apparelDetails?.footwearDetails?.mensSize);
    // testAndFix(x._id, 'bootType', x.details?.apparelDetails?.footwearDetails?.bootType);
    // testAndFix(x._id, 'footSize', x.details?.apparelDetails?.footwearDetails?.footSize);
    // testAndFix(x._id, 'heelHeight', x.details?.apparelDetails?.footwearDetails?.heelHeight);
    // testAndFix(x._id, 'heightMapType', x.details?.apparelDetails?.footwearDetails?.heightMapType);
    // testAndFix(x._id, 'shoeHeelType', x.details?.apparelDetails?.footwearDetails?.shoeHeelType);
    // testAndFix(x._id, 'shoeWidth', x.details?.apparelDetails?.footwearDetails?.shoeWidth);
    // testAndFix(x._id, 'strapType', x.details?.apparelDetails?.footwearDetails?.strapType);
    // testAndFix(x._id, 'toeStyle', x.details?.apparelDetails?.footwearDetails?.toeStyle);
    // testAndFix(x._id, 'closureType', x.details?.apparelDetails?.topDetails?.closureType);
    // testAndFix(x._id, 'fitType', x.details?.apparelDetails?.topDetails?.fitType);
    // testAndFix(x._id, 'lifestyleType', x.details?.apparelDetails?.topDetails?.lifestyleType);
    // testAndFix(x._id, 'lengthSize', x.details?.apparelDetails?.topDetails?.lengthSize);
    // testAndFix(x._id, 'lengthType', x.details?.apparelDetails?.topDetails?.lengthType);
    // testAndFix(x._id, 'size', x.details?.apparelDetails?.topDetails?.letterSize);
    // testAndFix(x._id, 'size', x.details?.apparelDetails?.topDetails?.suitSize);
    // testAndFix(x._id, 'pocketType', x.details?.apparelDetails?.topDetails?.pocketType);
    // testAndFix(x._id, 'backlineType', x.details?.apparelDetails?.topDetails?.backlineType);
    // testAndFix(x._id, 'chestSize', x.details?.apparelDetails?.topDetails?.chestSize);
    // testAndFix(x._id, 'collarType', x.details?.apparelDetails?.topDetails?.collarType);
    // testAndFix(x._id, 'cuffType', x.details?.apparelDetails?.topDetails?.cuffType);
    // testAndFix(x._id, 'dressType', x.details?.apparelDetails?.topDetails?.dressType);
    // testAndFix(x._id, 'neckSize', x.details?.apparelDetails?.topDetails?.neckSize);
    // testAndFix(x._id, 'neckType', x.details?.apparelDetails?.topDetails?.neckType);
    // testAndFix(x._id, 'sleeveSize', x.details?.apparelDetails?.topDetails?.sleeveSize);
    // testAndFix(x._id, 'sleeveType', x.details?.apparelDetails?.topDetails?.sleeveType);
    // testAndFix(x._id, 'suitType', x.details?.apparelDetails?.topDetails?.suitType);
    // testAndFix(x._id, 'bustSize', x.details?.apparelDetails?.braDetails?.bustSize);
    // testAndFix(x._id, 'swimsuitBottomStyle', x.details?.apparelDetails?.braDetails?.swimsuitBottomStyle);
    // testAndFix(x._id, 'swimsuitTopStyle', x.details?.apparelDetails?.braDetails?.swimsuitTopStyle);
    // testAndFix(x._id, 'size', x.details?.apparelDetails?.braDetails?.size);
    // testAndFix(x._id, 'awards', x.details?.mediaDetails?.awards);
    // testAndFix(x._id, 'copyright', x.details?.mediaDetails?.copyright);
    // testAndFix(x._id, 'mediaSubtitle', x.details?.mediaDetails?.subtitle);
    // testAndFix(x._id, 'mediaTitle', x.details?.mediaDetails?.title);
    // testAndFix(x._id, 'authors', x.details?.mediaDetails?.bookDetails?.authors);
    // testAndFix(x._id, 'blurb', x.details?.mediaDetails?.bookDetails?.blurb);
    // testAndFix(x._id, 'bookGenre', x.details?.mediaDetails?.bookDetails?.bookGenre);
    // testAndFix(x._id, 'bookType', x.details?.mediaDetails?.bookDetails?.bookType);
    // testAndFix(x._id, 'edition', x.details?.mediaDetails?.bookDetails?.edition);
    // testAndFix(x._id, 'illustrators', x.details?.mediaDetails?.bookDetails?.illustrators);
    // testAndFix(x._id, 'language', x.details?.mediaDetails?.bookDetails?.language);
    // testAndFix(x._id, 'pages', x.details?.mediaDetails?.bookDetails?.pages);
    // testAndFix(x._id, 'publishers', x.details?.mediaDetails?.bookDetails?.publishers);
    // testAndFix(x._id, 'artist', x.details?.mediaDetails?.musicDetails?.artist);
    // testAndFix(x._id, 'musicFormat', x.details?.mediaDetails?.musicDetails?.musicFormat);
    // testAndFix(x._id, 'musicGenre', x.details?.mediaDetails?.musicDetails?.musicGenre);
    // testAndFix(x._id, 'tracks', x.details?.mediaDetails?.musicDetails?.tracks);
    // testAndFix(x._id, 'blurb', x.details?.mediaDetails?.videoDetails?.blurb);
    // testAndFix(x._id, 'collectionOf', x.details?.mediaDetails?.videoDetails?.collectionOf);
    // testAndFix(x._id, 'count', x.details?.mediaDetails?.videoDetails?.count);
    // testAndFix(x._id, 'directedBy', x.details?.mediaDetails?.videoDetails?.directedBy);
    // testAndFix(x._id, 'videoFormat', x.details?.mediaDetails?.videoDetails?.format);
    // testAndFix(x._id, 'videoGenre', x.details?.mediaDetails?.videoDetails?.genre);
    // testAndFix(x._id, 'movieRating', x.details?.mediaDetails?.videoDetails?.movieRating);
    // testAndFix(x._id, 'runtime', x.details?.mediaDetails?.videoDetails?.runtime);
    // testAndFix(x._id, 'starring', x.details?.mediaDetails?.videoDetails?.starring);
    // testAndFix(x._id, 'tvRating', x.details?.mediaDetails?.videoDetails?.tvRating);
    // testAndFix(x._id, 'videoType', x.details?.mediaDetails?.videoDetails?.videoType);
    // testAndFix(x._id, 'studio', x.details?.mediaDetails?.videoDetails?.studio);
    // testAndFix(x._id, 'blurb', x.details?.mediaDetails?.videoGameDetails?.blurb);
    // testAndFix(x._id, 'ESRBRating', x.details?.mediaDetails?.videoGameDetails?.ESRBRating);
    // testAndFix(x._id, 'consoleType', x.details?.mediaDetails?.videoGameDetails?.consoleType);
    // testAndFix(x._id, 'studio', x.details?.mediaDetails?.videoGameDetails?.studio);
});


// .insertMany([
//   { 'item': 'abc', 'price': 10, 'quantity': 2, 'date': new Date('2014-03-01T08:00:00Z') },
//   { 'item': 'jkl', 'price': 20, 'quantity': 1, 'date': new Date('2014-03-01T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 10, 'date': new Date('2014-03-15T09:00:00Z') },
//   { 'item': 'xyz', 'price': 5, 'quantity': 20, 'date': new Date('2014-04-04T11:21:39.736Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 10, 'date': new Date('2014-04-04T21:23:13.331Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 5, 'date': new Date('2015-06-04T05:08:13Z') },
//   { 'item': 'def', 'price': 7.5, 'quantity': 10, 'date': new Date('2015-09-10T08:43:00Z') },
//   { 'item': 'abc', 'price': 10, 'quantity': 5, 'date': new Date('2016-02-06T20:20:13Z') },
// ]);

// // Run a find command to view items sold on April 4th, 2014.
// const salesOnApril4th = db.getCollection('sales').find({
//   date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
// }).count();

// // Print a message to the output window.
// console.log(`${salesOnApril4th} sales occurred in 2014.`);

// // Here we run an aggregation and open a cursor to the results.
// // Use '.toArray()' to exhaust the cursor to return the whole result set.
// // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
// db.getCollection('sales').aggregate([
//   // Find all of the sales that occurred in 2014.
//   { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
//   // Group the total sales for each product.
//   { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
// ]);
