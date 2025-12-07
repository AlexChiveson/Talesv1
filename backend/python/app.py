from pathlib import Path
from flask import Flask, jsonify, request, send_from_directory

app = Flask(__name__, static_folder='../../public', static_url_path='')
DATA_DIR = Path(__file__).resolve().parents[2] / 'data'
DATA_DIR.mkdir(exist_ok=True)


def append_json(file_path: Path, payload: dict) -> None:
    existing = []
    if file_path.exists():
        existing_text = file_path.read_text(encoding='utf-8')
        try:
            import json
            existing = json.loads(existing_text) if existing_text else []
        except Exception:
            existing = []
    existing.append(payload)
    file_path.write_text(
        __import__('json').dumps(existing, ensure_ascii=False, indent=2),
        encoding='utf-8',
    )


def validate_fields(data: dict, fields: list[str]):
    return all(data.get(f) not in (None, '') for f in fields)


@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/order', methods=['POST'])
def order():
    data = request.get_json(silent=True) or {}
    if not validate_fields(data, ['firstName', 'lastName', 'email', 'address', 'cart']):
        return jsonify({'ok': False, 'error': 'Missing required fields'}), 400
    record = dict(data)
    record['createdAt'] = __import__('datetime').datetime.utcnow().isoformat() + 'Z'
    append_json(DATA_DIR / 'orders.json', record)
    # TODO: send confirmation email or webhook
    return jsonify({'ok': True})


@app.route('/api/review', methods=['POST'])
def review():
    data = request.get_json(silent=True) or {}
    if not validate_fields(data, ['name', 'email', 'link']):
        return jsonify({'ok': False, 'error': 'Missing required fields'}), 400
    record = dict(data)
    record['createdAt'] = __import__('datetime').datetime.utcnow().isoformat() + 'Z'
    append_json(DATA_DIR / 'reviews.json', record)
    # TODO: push to Google Sheets
    return jsonify({'ok': True})


@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)


if __name__ == '__main__':
    app.run(debug=True)
