Install

Install backend requirements:

    pip install -r /path/to/requirements.txt

Install frontend requirements:

    npm install

Usage

Make initial migrations:

    python manage.py makemigrations
    python manage.py migrate

Run server
python manage.py runserver

Start frontend:
npm start

API

Make your own credentials (api key and password) and store them along with shop name in settings.py as:

API_KEY=your_api_key
API_PASSWORD=your_api_password
SHOPIFY_NAME=your_shop_name
