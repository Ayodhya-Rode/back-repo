import ImageKit from '@imagekit/nodejs';


const imagekit = new ImageKit({
    privateKey: "private_TVQF+9QL0wcCrY3rdZrIs2fo2fg="
})


async function uploadFile(file) {
    const result =  await imagekit.files.upload({
        file,
        fileName: "music_" + Date.now(),
        folder: "spotify-backend/music"
    })
    return result;
};

export default uploadFile;