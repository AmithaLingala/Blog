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
        path: '/pages/$folder/', \\
        title: '$title', \\
        subtitle: '$subtitle', \\
        image: '/images/$folder/$image' \\
      },"

sed -i "5i $content" ./data/blogs.js;

mkdir -p ./pages/$folder;
mkdir -p ./images/$folder;

cp ./pages/basic/index.html ./pages/$folder/index.html;
sed -i -e "s/###Title###/$title/g" ./pages/$folder/index.html;
sed -i -e "s/###Subtitle###/$subtitle/g" ./pages/$folder/index.html
sed -i -e "s/###Date###/$date/g" ./pages/$folder/index.html

