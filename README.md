# project-template-vue3

整理一份自己常用的 Vue3 開發設定的 Template。

## 純 Docker 設定檔（無安裝任何東西）

切到 pure-docker-template 分支進行 clone

#### Usage

1. 開啟 Docker dashboard
2. 切到 clone 下來的檔案夾
3. 使用 docker-compose 啟動容器 `docker compose up -d`
4. 使用 Vue-Cli 建立自己需要的環境

```
docker compose exec web vue create example-folder-name
```

如果不希望另外建立一個新資料夾，直接安裝在與 Dockerfile 同一層內，可以輸入底下指
令

```
docker compose exec web vue create .
```

之後在 Terminal 進行設定，這部分就以自己的需求下去選擇與設定
