# force update 1

FROM denoland/deno:alpine

WORKDIR /root
ADD requirements.txt /root

RUN \
apk add --no-cache python3 py3-pip git && \
python3 -m pip install -r requirements.txt
