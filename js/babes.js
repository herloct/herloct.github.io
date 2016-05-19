function addNewPost(media, content)
{
    var newPostKey = firebase.database().ref().child('posts').push().key,
        updates = {};

    updates['/posts/' + newPostKey] = {
        media: media,
        content: content
    };

    return firebase.database().ref().update(updates);
}

function addTag(tag)
{
    var newTagKey = firebase.database().ref().child('tags').push().key,
        updates = {};

    updates['/tags/' + newTagKey] = {
        name: tag,
        count: 1
    };

    return firebase.database().ref().update(updates);
}
