# docker禁止laravel
> mysqlは許す。

## phpインストール
```
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.0 php8.0-dom php8.0-mbstring php8.0-mysql
```

phpバージョン変更
```
sudo update-alternatives --config php
```

## composerインストール
```
sudo apt-get remove composer;
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');";
sudo php composer-setup.php --install-dir=/usr/bin --filename=composer;
composer self-update;
```

## laravelプロジェクト作成
```
composer create-project --prefer-dist laravel/laravel laravel "8.*"
```

## mysql立ち上げる
```
docker-compose up -d
```

## env書き換え
.env.example
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database
DB_USERNAME=user
DB_PASSWORD=password
```

コピー
```
cp .env.example .env
```

## mysqlと繋がったか確認
```
php artisan migrate
```

## サーバー仮起動
```
php artisan serve
```

## 鍵作れと怒られた。。
```
php artisan key:generate
```

## もう一度確認！
<img src="./images/serve.png" style="height: 150px;" />
起動ヨシ！

