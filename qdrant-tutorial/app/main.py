from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance

def app():
    qdrant_client = QdrantClient(host='localhost', port=6333)
    # 下記を実行するとqdrantのapiが叩かれる模様
    # - DELETE /collections/startups
    # - PUT /collections/startups
    qdrant_client.recreate_collection(
        collection_name='startups', 
        vectors_config=VectorParams(size=768, distance=Distance.COSINE),
    )

    # おそらくapi経由でqdrantのデータを入れ替えたりできる
