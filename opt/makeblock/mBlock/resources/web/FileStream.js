/**
 * Created by dell on 2017/5/9.
 */
var remote = require('electron').remote;
var fs = remote.require('fs'), stat = fs.stat;
var DecompressZip = remote.require('decompress-zip');
var unzip = remote.require("unzip");
console.log("xxxxxxxxxxunzip", unzip);
const nodePath = require('path');
function fileStream() {
    var self = this;
    this.openFile = function (path, callback) {
        path = path.replace(/\\/g, '/');
        fs.readFile(nodePath.normalize(path), function (err, data) {
            if (err) {
                console.log("文件读取出错");
                callback(err)
            }
            else {
                //console.log('data=',data)
                callback(data);
            }
        })
    }
    // openFile重构版，返回可捕获错误信息
    this.openFileWithError = function (path, callback) {
        path = path.replace(/\\/g, '/');
        fs.readFile(nodePath.normalize(path), function (err, data) {
            if (err) {
                console.log("文件读取出错");
                return callback(err)
            }
            return callback(null,data);
        })
    }
    this.saveFile = function (path, data,callback) {
        path = path.replace(/\\/g, '/');
        console.log('path  =', path);
        fs.writeFile(nodePath.normalize(path), data,err=>{
        	callback(err);
        });
    }
    this.readdir = function (path)  {
        return fs.readdirSync(path);
    }
    this.readFile = function (path) {
        return fs.readFileSync(path, 'utf8');
    }
    this.copyFile = function (src, dst) {
        // 读取目录中的所有文件/目录
        fs.readdir(src, function (err, paths) {
            if (err) {
                throw err;
            }
            console.log("%%%%", paths);
            paths.forEach(function (path) {
                var _src = src + '/' + path,
                    _dst = dst + '/' + path,
                    readable, writable;
                stat(_src, function (err, st) {
                    if (err) {
                        throw err;
                    }
                    // 判断是否为文件
                    if (st.isFile()) {
                        // 创建读取流
                        readable = fs.createReadStream(_src);
                        // 创建写入流
                        writable = fs.createWriteStream(_dst);
                        // 通过管道来传输流
                        readable.pipe(writable);
                    }
                    // 如果是目录则递归调用自身
                    else if (st.isDirectory()) {
                        self.FileDirExists(_src, _dst, self.copyFile);
                    }
                });
            });
        });
    }
    // 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
    this.FileDirExists = function (src, dst, callback) {
        fs.exists(dst, function (exists) {
            // 已存在
            if (exists) {
                callback(src, dst);
            }
            // 不存在
            else {
                fs.mkdir(dst, function () {
                    callback(src, dst);
                });
            }
        });
    }
    this.downloadFileOnline = function(zip, zipPath, file,dist){
        if (file.dir) {
            fs.mkdir(dist + zipPath, function () {
                console.log("create file success")
            });
        } else {
            zip.file(zipPath)
                .nodeStream()
                .pipe(fs.createWriteStream(dist + zipPath))
                .on('finish', function () {
                    // JSZip generates a readable stream with a "end" event,
                    // but is piped here in a writable stream which emits a "finish" event.
                    console.log("text file written.");
                });
        }
    }
    this.unzip = function (src, dist) {
        fs.createReadStream(src).pipe(unzip.Extract({path: dist}));
    }
    this.uncompress = function (src, dist) {
        var unzipper = new DecompressZip(src);

        // Add the error event listener
        unzipper.on('error', function (err) {
            console.log('Caught an error', err);
        });

        // Notify when everything is extracted
        unzipper.on('extract', function (log) {
            console.log('Finished extracting', log);
        });

        // Notify "progress" of the decompressed files
        unzipper.on('progress', function (fileIndex, fileCount) {
            console.log('Extracted file ' + (fileIndex + 1) + ' of ' + fileCount);
        });

        // Unzip !
        unzipper.extract({
            path: dist
        });
    }
}


