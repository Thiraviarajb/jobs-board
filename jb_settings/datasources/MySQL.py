import pymysql


class MySQL(object):
    def __init__(self, server_name, port, user_name, password, db_name, dict_cursor=False):
        # conn = pymysql.connect(host='target-mysql', port=3306, user='root', passwd='root', db='jobs_board',
        #                        charset='utf8mb4')
        self.server_name = server_name
        self.port = port
        self.user_name = user_name
        self.password = password
        self.db_name = db_name
        self.dict_cursor = dict_cursor

    def _get_connection(self):
        try:
            if self.dict_cursor:
                conn = pymysql.connect(host=self.server_name,
                                       port=self.port,
                                       user=self.user_name,
                                       passwd=self.password,
                                       db=self.db_name,
                                       charset='utf8mb4',
                                       cursorclass=pymysql.cursors.DictCursor)
            else:
                conn = pymysql.connect(host=self.server_name,
                                       port=self.port,
                                       user=self.user_name,
                                       passwd=self.password,
                                       db=self.db_name,
                                       charset='utf8mb4')


            return conn
        except Exception as e:
            print("Unable to get the connection. Reason:\n" + str(e))
            raise e

    def execQuery(self, query):
        try:
            conn = self._get_connection()
            cursor = conn.cursor()
            cursor.execute(query)
            if self.dict_cursor:
                conn.close()
                return cursor.fetchall()
            results = []
            for row in cursor:
                results.append(list(row))
            conn.close()
            return results
        except Exception as e:
            print("Unable to execute query. Reason: \n" + str(e))
            raise e
