while getopts t:s:f:i: flag
do
    case "${flag}" in
        t) title=${OPTARG};;
        s) subtitle=${OPTARG};;
        f) folder=${OPTARG};;
        i) image=${OPTARG};;
    esac
done
date=`date +"%B %d, %Y"`
content="\
\ \ \ \ \ \ { \\
        path: '/blogs/$folder/', \\
        title: '$title', \\
        subtitle: '$subtitle', \\
        image: '/images/$folder/$image' \\
      },"

sed -i "5i $content" ./data/blogs.js;

mkdir -p ./blogs/$folder;
mkdir -p ./images/$folder;

cp ./blogs/basic/index.html ./blogs/$folder/index.html;
sed -i -e "s/###Title###/$title/g" ./blogs/$folder/index.html;
sed -i -e "s/###Subtitle###/$subtitle/g" ./blogs/$folder/index.html
sed -i -e "s/###Date###/$date/g" ./blogs/$folder/index.html

