import duckdb
import pandas

def main():
    my_df = pandas.DataFrame.from_dict({'a': [42]})
    con = duckdb.connect('data.db')

    # ただの select
    # table が標準出力される
    con.sql("SELECT 42").show()

    # table が存在するとエラーになる
    con.sql('CREATE TABLE integers(i INTEGER)')
    con.sql('INSERT INTO integers VALUES (42)')
    con.sql('INSERT INTO integers VALUES (10)')
    con.sql('INSERT INTO integers VALUES (11)')
    con.sql('INSERT INTO integers VALUES (0)')
    con.sql('INSERT INTO integers VALUES (900)')
    con.sql('INSERT INTO integers VALUES (302)')
    con.sql('INSERT INTO integers VALUES (30)')
    con.sql('INSERT INTO integers VALUES (59)')
    con.sql('SELECT * FROM integers').show()

    # 基本統計量的なものが取れる。箱ひげ図を作れるんじゃないか
    con.sql('SUMMARIZE SELECT * FROM integers').show()

    con.sql("CREATE TABLE dataframe AS SELECT * FROM my_df")
    aa = con.sql('SELECT * FROM dataframe')
    print(type(aa)) # duckdb.DuckDBPyRelation
