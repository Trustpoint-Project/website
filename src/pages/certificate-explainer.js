import React, { useState, useMemo } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const samples = {
  root: {
    name: "Root CA",
    pem: `-----BEGIN CERTIFICATE-----
MIID2jCCAsKgAwIBAgIURGfmdTQFJJLEgIposu8q3yydvd4wDQYJKoZIhvcNAQEL
BQAwczELMAkGA1UEBhMCREUxCzAJBgNVBAgMAkJXMRUwEwYDVQQHDAxGcmV1ZGVu
c3RhZHQxHzAdBgNVBAoMFlRydXN0cG9pbnQgVExTIFJvb3QgQ0ExHzAdBgNVBAMM
FlRydXN0cG9pbnQgVExTIFJvb3QgQ0EwHhcNMjUxMjE4MDg1NzM2WhcNMzUxMjE2
MDg1NzM2WjBzMQswCQYDVQQGEwJERTELMAkGA1UECAwCQlcxFTATBgNVBAcMDEZy
ZXVkZW5zdGFkdDEfMB0GA1UECgwWVHJ1c3Rwb2ludCBUTFMgUm9vdCBDQTEfMB0G
A1UEAwwWVHJ1c3Rwb2ludCBUTFMgUm9vdCBDQTCCASIwDQYJKoZIhvcNAQEBBQAD
ggEPADCCAQoCggEBAJwMqSP0na0UJI8elG91q2IkbCCemXzrNy5Cu8olTingjY3e
8QTiBNpcvwkwrgJ2EDL49deC1R0vUsGN2peh8h9bUZEdwDPZZgVuhGYk9/tUW5h8
Z1NlH6yGaD/X3TQSULzqJlVRNA+QLq2BtUQc3qz4iovahaP+0flW+7+FARdp2a8I
GBDBkS7QXjzkrmDWOnFXtIhUw739Cs5Nlu8fh8elAxeKI3z1W6PSMrCb5aF3Q+uf
Yq0ONk+Vk+WV/JXF4Kh6YTbmOoO0YF0P3acvcl0xoRayGhYiJkmHI0CBUYD8bH4Z
AvevJn6Fc3snbAS4C0s6qL5i1ngxAFWjb3tVRXsCAwEAAaNmMGQwEgYDVR0TAQH/
BAgwBgEB/wIBATAOBgNVHQ8BAf8EBAMCAQYwHQYDVR0OBBYEFKDR/tHPMPEgliaT
pwHlfd0SQbdCMB8GA1UdIwQYMBaAFKDR/tHPMPEgliaTpwHlfd0SQbdCMA0GCSqG
SIb3DQEBCwUAA4IBAQAkBS3PgNQdVGX9A6235xZCfAMDCcvSOUCMfPzNbJLC5NqH
p1deQJlIGIZKmwG26j+yeJf+bi89XlLlnTRQ8DmV2+orNaYzgeorPM8xt63rPDQz
Qtwip0YrkA7pqrbYj9UJ1Al4FGa/t4cnXtI1BluMnrwbTI0r8Sfrs1RVArvjHUWY
VWKrbAC4Vdq8GNaFmmOu7ZiNK8Z75CabRdM5FTWPD1NOuXTVAN1F9F3DbioG7l5W
0uTcLK57IwNBRiYYabTQtus60WRSfEVKdhD6ccfjoGupXn3Wf66pEQpw/fJlJGDs
qjYOl/QAVaFhvQ3e1g651xOGZP2AlV2grg0bbZlJ
-----END CERTIFICATE-----`,
    asn1: `Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            44:67:e6:75:34:05:24:92:c4:80:8a:68:b2:ef:2a:df:2c:9d:bd:de
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Root CA, CN=Trustpoint TLS Root CA
        Validity
            Not Before: Dec 18 08:57:36 2025 GMT
            Not After : Dec 16 08:57:36 2035 GMT
        Subject: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Root CA, CN=Trustpoint TLS Root CA
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:9c:0c:a9:23:f4:9d:ad:14:24:8f:1e:94:6f:75:
                    ab:62:24:6c:20:9e:99:7c:eb:37:2e:42:bb:ca:25:
                    4e:29:e0:8d:8d:de:f1:04:e2:04:da:5c:bf:09:30:
                    ae:02:76:10:32:f8:f5:d7:82:d5:1d:2f:52:c1:8d:
                    da:97:a1:f2:1f:5b:51:91:1d:c0:33:d9:66:05:6e:
                    84:66:24:f7:fb:54:5b:98:7c:67:53:65:1f:ac:86:
                    68:3f:d7:dd:34:12:50:bc:ea:26:55:51:34:0f:90:
                    2e:ad:81:b5:44:1c:de:ac:f8:8a:8b:da:85:a3:fe:
                    d1:f9:56:fb:bf:85:01:17:69:d9:af:08:18:10:c1:
                    91:2e:d0:5e:3c:e4:ae:60:d6:3a:71:57:b4:88:54:
                    c3:bd:fd:0a:ce:4d:96:ef:1f:87:c7:a5:03:17:8a:
                    23:7c:f5:5b:a3:d2:32:b0:9b:e5:a1:77:43:eb:9f:
                    62:ad:0e:36:4f:95:93:e5:95:fc:95:c5:e0:a8:7a:
                    61:36:e6:3a:83:b4:60:5d:0f:dd:a7:2f:72:5d:31:
                    a1:16:b2:1a:16:22:26:49:87:23:40:81:51:80:fc:
                    6c:7e:19:02:f7:af:26:7e:85:73:7b:27:6c:04:b8:
                    0b:4b:3a:a8:be:62:d6:78:31:00:55:a3:6f:7b:55:
                    45:7b
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints: critical
                CA:TRUE, pathlen:1
            X509v3 Key Usage: critical
                Certificate Sign, CRL Sign
            X509v3 Subject Key Identifier: 
                A0:D1:FE:D1:CF:30:F1:20:96:26:93:A7:01:E5:7D:DD:12:41:B7:42
            X509v3 Authority Key Identifier: 
                A0:D1:FE:D1:CF:30:F1:20:96:26:93:A7:01:E5:7D:DD:12:41:B7:42
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        24:05:2d:cf:80:d4:1d:54:65:fd:03:ad:b7:e7:16:42:7c:03:
        03:09:cb:d2:39:40:8c:7c:fc:cd:6c:92:c2:e4:da:87:a7:57:
        5e:40:99:48:18:86:4a:9b:01:b6:ea:3f:b2:78:97:fe:6e:2f:
        3d:5e:52:e5:9d:34:50:f0:39:95:db:ea:2b:35:a6:33:81:ea:
        2b:3c:cf:31:b7:ad:eb:3c:34:33:42:dc:22:a7:46:2b:90:0e:
        e9:aa:b6:d8:8f:d5:09:d4:09:78:14:66:bf:b7:87:27:5e:d2:
        35:06:5b:8c:9e:bc:1b:4c:8d:2b:f1:27:eb:b3:54:55:02:bb:
        e3:1d:45:98:55:62:ab:6c:00:b8:55:da:bc:18:d6:85:9a:63:
        ae:ed:98:8d:2b:c6:7b:e4:26:9b:45:d3:39:15:35:8f:0f:53:
        4e:b9:74:d5:00:dd:45:f4:5d:c3:6e:2a:06:ee:5e:56:d2:e4:
        dc:2c:ae:7b:23:03:41:46:26:18:69:b4:d0:b6:eb:3a:d1:64:
        52:7c:45:4a:76:10:fa:71:c7:e3:a0:6b:a9:5e:7d:d6:7f:ae:
        a9:11:0a:70:fd:f2:65:24:60:ec:aa:36:0e:97:f4:00:55:a1:
        61:bd:0d:de:d6:0e:b9:d7:13:86:64:fd:80:95:5d:a0:ae:0d:
        1b:6d:99:49`,
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCcDKkj9J2tFCSP
HpRvdatiJGwgnpl86zcuQrvKJU4p4I2N3vEE4gTaXL8JMK4CdhAy+PXXgtUdL1LB
jdqXofIfW1GRHcAz2WYFboRmJPf7VFuYfGdTZR+shmg/1900ElC86iZVUTQPkC6t
gbVEHN6s+IqL2oWj/tH5Vvu/hQEXadmvCBgQwZEu0F485K5g1jpxV7SIVMO9/QrO
TZbvH4fHpQMXiiN89Vuj0jKwm+Whd0Prn2KtDjZPlZPllfyVxeCoemE25jqDtGBd
D92nL3JdMaEWshoWIiZJhyNAgVGA/Gx+GQL3ryZ+hXN7J2wEuAtLOqi+YtZ4MQBV
o297VUV7AgMBAAECggEAKKCZNq28kW+xlvtgrOYnUR1nc1SnZGD+1FH2f0oYIAoB
AKM+/8Tye4FzESr12tkvHX44zzuWTYthEdhjRWAZ3/UP9uaWgElE6Pwdh1RvpaUQ
VdJpukoVJX82zAxg4Go2UADsKwFBux2QMYcYENwtUz5AH+osKgaxVyfA0luH7bau
pC6CPaRunYKwBrTrjn335ZAwo96ZQJEhgoTxjwnjzh6HFnf34Vw08YzDUFhb7ew5
OIqI5SnM1JfGjGCLYavXSDIzLmlVlFT7WLyDbBdtDC8key1dAD9uTB4f6xNGmtOO
SZQQR4ZeDDxX4BQqBUAQ6b+AUEL3R8Ck/xHWuoLaSQKBgQDNOPoMNJlyuG0j6Ajt
AXuXJIaXqMiY2VGg4Ioub16vbVZGnFVOuJylvwWFvjF3uMSLSBxL6GqyKUjezTGN
o+wB3NLaEmkvuAAczF2ORxV779yp1lhZFhiJ1J6GR9fz5wWfL25edNnnqQhX7/gw
RI+qLhM4P6OSTa21vfS+hZbkQwKBgQDCqQFLXFhtSuUbRJpOMM/0BPDEeIOH90p3
ajB70Qdm9mK7p/gNtV0zFoTAA9UYAFOcYgJ+Vd8LGBrF6X853bSOkBj+tH5NeDFe
id1M+SYH7Vzgtgi/F8/WwK+RlorO1wyQJn0vBBwfJQhB5Ou6/Y8VoDCZJq3PEv7p
CwDFlbBiaQKBgQCNj6r0NmhO+SbX6NwXWLl/FcP944CT5vxmw9ytkUc4LWyhAn/Z
8ICl2HGfwwVudzakeRaDygunX9ETV2nCMXvAASo1IRQLxZnWQ6aZWTFZr6iAQwno
UdSVZuP+7pnpdcer+dThNSuGoFPQDQkfinurQWMinstfRVP5FNI5hf8C7wKBgEQO
lI5FhgEIG1vSO2S0+i+lfowiWlIyKk3fyX2wkjb0U4aqbjZUv3X6HIWJkXonuxPE
zHxhB284iTvCrCGOGu9w/9wlPLdXG2OjLcUYoqxI150U56/v4lGB4qAzEurIEvNf
EYtbk31sFBv9rlEdD2aPMA6LkF8ClC7kEuwBrr5pAoGALuTrNcky4pfEyhoN/8iI
VX0Vo/DPQR2PUHAh2q7Q9vnZav66AraKZucnjaA6caQhLeJG/nOXwLDlXxO572+T
u5Falag7t8NEH3jUz4xAzLJtlMokUnJorl41QV1SdheovpBed20yBZjmUsivcMcp
6YxeYKutDkCfhWxxW5Vag7A=
-----END PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnAypI/SdrRQkjx6Ub3Wr
YiRsIJ6ZfOs3LkK7yiVOKeCNjd7xBOIE2ly/CTCuAnYQMvj114LVHS9SwY3al6Hy
H1tRkR3AM9lmBW6EZiT3+1RbmHxnU2UfrIZoP9fdNBJQvOomVVE0D5AurYG1RBze
rPiKi9qFo/7R+Vb7v4UBF2nZrwgYEMGRLtBePOSuYNY6cVe0iFTDvf0Kzk2W7x+H
x6UDF4ojfPVbo9IysJvloXdD659irQ42T5WT5ZX8lcXgqHphNuY6g7RgXQ/dpy9y
XTGhFrIaFiImSYcjQIFRgPxsfhkC968mfoVzeydsBLgLSzqovmLWeDEAVaNve1VF
ewIDAQAB
-----END PUBLIC KEY-----`,
    crl: `-----BEGIN X509 CRL-----
MIIBzTCBtgIBATANBgkqhkiG9w0BAQsFADBzMQswCQYDVQQGEwJERTELMAkGA1UE
CAwCQlcxFTATBgNVBAcMDEZyZXVkZW5zdGFkdDEfMB0GA1UECgwWVHJ1c3Rwb2lu
dCBUTFMgUm9vdCBDQTEfMB0GA1UEAwwWVHJ1c3Rwb2ludCBUTFMgUm9vdCBDQRcN
MjUxMjE4MDg1NzM2WhcNMjYwMTE3MDg1NzM2WqAPMA0wCwYDVR0UBAQCAhAAMA0G
CSqGSIb3DQEBCwUAA4IBAQAEyNqVTCJwkWJLg0WQWamzgmYh47YXDgo3wZSZv4L4
J//xfB8n6STJadBuGZtUro62aFAepEdePXQv6QMigo+CcIZQ4YVex97i41lr/cB4
X31LK4BA6+/5FF1vBE3rdtrpo1iP7wu8y0zKzqpKFi4pAZptKl0OFX41TQJg5sQ0
yekbb+3GSkeLYgJ6YiZwP2+u4mkHH1ToiFKXcOxsP1JqLAAidYOlBKexPDXvyX/i
seH9EmlBN01s2XXfAoV97G9hlXq8CsQOlIbgciMYz4GzyG3kb4Zfjq39Kt5sxqYQ
14cgf7Fg7Z3mO0EGno6JTfvR6vPRHMifEAnD1n0rk1LV
-----END X509 CRL-----`,
    crlAsn1: `Certificate Revocation List (CRL):
    Version 2 (0x1)
    Signature Algorithm: sha256WithRSAEncryption
    Issuer: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Root CA, CN=Trustpoint TLS Root CA
    Last Update: Dec 18 08:57:36 2025 GMT
    Next Update: Jan 17 08:57:36 2026 GMT
    CRL extensions:
        X509v3 CRL Number: 
            4096
No Revoked Certificates.
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        04:c8:da:95:4c:22:70:91:62:4b:83:45:90:59:a9:b3:82:66:
        21:e3:b6:17:0e:0a:37:c1:94:99:bf:82:f8:27:ff:f1:7c:1f:
        27:e9:24:c9:69:d0:6e:19:9b:54:ae:8e:b6:68:50:1e:a4:47:
        5e:3d:74:2f:e9:03:22:82:8f:82:70:86:50:e1:85:5e:c7:de:
        e2:e3:59:6b:fd:c0:78:5f:7d:4b:2b:80:40:eb:ef:f9:14:5d:
        6f:04:4d:eb:76:da:e9:a3:58:8f:ef:0b:bc:cb:4c:ca:ce:aa:
        4a:16:2e:29:01:9a:6d:2a:5d:0e:15:7e:35:4d:02:60:e6:c4:
        34:c9:e9:1b:6f:ed:c6:4a:47:8b:62:02:7a:62:26:70:3f:6f:
        ae:e2:69:07:1f:54:e8:88:52:97:70:ec:6c:3f:52:6a:2c:00:
        22:75:83:a5:04:a7:b1:3c:35:ef:c9:7f:e2:b1:e1:fd:12:69:
        41:37:4d:6c:d9:75:df:02:85:7d:ec:6f:61:95:7a:bc:0a:c4:
        0e:94:86:e0:72:23:18:cf:81:b3:c8:6d:e4:6f:86:5f:8e:ad:
        fd:2a:de:6c:c6:a6:10:d7:87:20:7f:b1:60:ed:9d:e6:3b:41:
        06:9e:8e:89:4d:fb:d1:ea:f3:d1:1c:c8:9f:10:09:c3:d6:7d:
        2b:93:52:d5`,
  },
  intermediate: {
    name: "Issuing CA",
    pem: `-----BEGIN CERTIFICATE-----
MIID6zCCAtOgAwIBAgIUR/RLT8x4nYFDJvoeAHLmToAG6cMwDQYJKoZIhvcNAQEL
BQAwczELMAkGA1UEBhMCREUxCzAJBgNVBAgMAkJXMRUwEwYDVQQHDAxGcmV1ZGVu
c3RhZHQxHzAdBgNVBAoMFlRydXN0cG9pbnQgVExTIFJvb3QgQ0ExHzAdBgNVBAMM
FlRydXN0cG9pbnQgVExTIFJvb3QgQ0EwHhcNMjUxMjE4MDg1NzM2WhcNMzAxMjE3
MDg1NzM2WjCBgzELMAkGA1UEBhMCREUxCzAJBgNVBAgMAkJXMRUwEwYDVQQHDAxG
cmV1ZGVuc3RhZHQxJzAlBgNVBAoMHlRydXN0cG9pbnQgVExTIEludGVybWVkaWF0
ZSBDQTEnMCUGA1UEAwweVHJ1c3Rwb2ludCBUTFMgSW50ZXJtZWRpYXRlIENBMIIB
IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7QTZERu5knpoDGBPOgdRGiqA
aauB+H7gOE7KvK3OVs68wxiSwfbGfY43dAgZp91hRpb8sh5+WkRI7/XXb8TcP2fq
2imM1v9SfYRmry2LxAoD12PUxH9QlUJfDbGv1AN+T4PdagakoGywBOOcAqPGjhXk
0asx2mm6S/WOlRSheeJv/YJC/5O4AdM5rc+0r3wM0Nvy0HQRx0OTcZdm6N2OMaF3
APIbEHXlGJU/LrG9TU0vdbWkfAtDLHTw39E8JkWcGnyA80W43947x4lBYC3ILDQs
yde0DpHy+sEKGXV5YmDZcdV0ue0UYy7Lmgn1SpisZ5umUgH07vc+WLIBt3M6VwID
AQABo2YwZDASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIBBjAdBgNV
HQ4EFgQURbPWXxhwSArJkz1tpFkUv9Eq1BYwHwYDVR0jBBgwFoAUoNH+0c8w8SCW
JpOnAeV93RJBt0IwDQYJKoZIhvcNAQELBQADggEBAIEEPWDy3BoOvISdfPpHxTKm
3cskBUvYqRzyPxd/BdOSaiO0W4+rlgvs8eW4hCfn1542Lt4Atdzr/ZtUU03k6sRh
93yEbNqyoFycriY4Ka6n5Se7S/Kp5VmQya+JaQou/Ky4EelDqvcONz8s7qIWpAiB
nCg2gs61lLiSeGX2zkFyboB9AGV9vGQNBOUu17z5jMf2SQ2SdvVuay2ev90EbCCP
UrCpwLa/2CFRvjpHqwV+wzCp1Ec59o5+ksGUGouzU6QaNLGP2Gt0VdbbPjPoeoAq
67xw7a8KvPE8aDfVeufzCFbpsot8eIcc3x4jx74K2rahu415F1bqothKBUmdehQ=
-----END CERTIFICATE-----`,
    asn1: `Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            47:f4:4b:4f:cc:78:9d:81:43:26:fa:1e:00:72:e6:4e:80:06:e9:c3
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Root CA, CN=Trustpoint TLS Root CA
        Validity
            Not Before: Dec 18 08:57:36 2025 GMT
            Not After : Dec 17 08:57:36 2030 GMT
        Subject: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Intermediate CA, CN=Trustpoint TLS Intermediate CA
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:ed:04:d9:11:1b:b9:92:7a:68:0c:60:4f:3a:07:
                    51:1a:2a:80:69:ab:81:f8:7e:e0:38:4e:ca:bc:ad:
                    ce:56:ce:bc:c3:18:92:c1:f6:c6:7d:8e:37:74:08:
                    19:a7:dd:61:46:96:fc:b2:1e:7e:5a:44:48:ef:f5:
                    d7:6f:c4:dc:3f:67:ea:da:29:8c:d6:ff:52:7d:84:
                    66:af:2d:8b:c4:0a:03:d7:63:d4:c4:7f:50:95:42:
                    5f:0d:b1:af:d4:03:7e:4f:83:dd:6a:06:a4:a0:6c:
                    b0:04:e3:9c:02:a3:c6:8e:15:e4:d1:ab:31:da:69:
                    ba:4b:f5:8e:95:14:a1:79:e2:6f:fd:82:42:ff:93:
                    b8:01:d3:39:ad:cf:b4:af:7c:0c:d0:db:f2:d0:74:
                    11:c7:43:93:71:97:66:e8:dd:8e:31:a1:77:00:f2:
                    1b:10:75:e5:18:95:3f:2e:b1:bd:4d:4d:2f:75:b5:
                    a4:7c:0b:43:2c:74:f0:df:d1:3c:26:45:9c:1a:7c:
                    80:f3:45:b8:df:de:3b:c7:89:41:60:2d:c8:2c:34:
                    2c:c9:d7:b4:0e:91:f2:fa:c1:0a:19:75:79:62:60:
                    d9:71:d5:74:b9:ed:14:63:2e:cb:9a:09:f5:4a:98:
                    ac:67:9b:a6:52:01:f4:ee:f7:3e:58:b2:01:b7:73:
                    3a:57
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints: critical
                CA:TRUE, pathlen:0
            X509v3 Key Usage: critical
                Certificate Sign, CRL Sign
            X509v3 Subject Key Identifier: 
                45:B3:D6:5F:18:70:48:0A:C9:93:3D:6D:A4:59:14:BF:D1:2A:D4:16
            X509v3 Authority Key Identifier: 
                A0:D1:FE:D1:CF:30:F1:20:96:26:93:A7:01:E5:7D:DD:12:41:B7:42
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        81:04:3d:60:f2:dc:1a:0e:bc:84:9d:7c:fa:47:c5:32:a6:dd:
        cb:24:05:4b:d8:a9:1c:f2:3f:17:7f:05:d3:92:6a:23:b4:5b:
        8f:ab:96:0b:ec:f1:e5:b8:84:27:e7:d7:9e:36:2e:de:00:b5:
        dc:eb:fd:9b:54:53:4d:e4:ea:c4:61:f7:7c:84:6c:da:b2:a0:
        5c:9c:ae:26:38:29:ae:a7:e5:27:bb:4b:f2:a9:e5:59:90:c9:
        af:89:69:0a:2e:fc:ac:b8:11:e9:43:aa:f7:0e:37:3f:2c:ee:
        a2:16:a4:08:81:9c:28:36:82:ce:b5:94:b8:92:78:65:f6:ce:
        41:72:6e:80:7d:00:65:7d:bc:64:0d:04:e5:2e:d7:bc:f9:8c:
        c7:f6:49:0d:92:76:f5:6e:6b:2d:9e:bf:dd:04:6c:20:8f:52:
        b0:a9:c0:b6:bf:d8:21:51:be:3a:47:ab:05:7e:c3:30:a9:d4:
        47:39:f6:8e:7e:92:c1:94:1a:8b:b3:53:a4:1a:34:b1:8f:d8:
        6b:74:55:d6:db:3e:33:e8:7a:80:2a:eb:bc:70:ed:af:0a:bc:
        f1:3c:68:37:d5:7a:e7:f3:08:56:e9:b2:8b:7c:78:87:1c:df:
        1e:23:c7:be:0a:da:b6:a1:bb:8d:79:17:56:ea:a2:d8:4a:05:
        49:9d:7a:14`,
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDtBNkRG7mSemgM
YE86B1EaKoBpq4H4fuA4Tsq8rc5WzrzDGJLB9sZ9jjd0CBmn3WFGlvyyHn5aREjv
9ddvxNw/Z+raKYzW/1J9hGavLYvECgPXY9TEf1CVQl8Nsa/UA35Pg91qBqSgbLAE
45wCo8aOFeTRqzHaabpL9Y6VFKF54m/9gkL/k7gB0zmtz7SvfAzQ2/LQdBHHQ5Nx
l2bo3Y4xoXcA8hsQdeUYlT8usb1NTS91taR8C0MsdPDf0TwmRZwafIDzRbjf3jvH
iUFgLcgsNCzJ17QOkfL6wQoZdXliYNlx1XS57RRjLsuaCfVKmKxnm6ZSAfTu9z5Y
sgG3czpXAgMBAAECggEAJ1ZfpGxCj2ILdMpjO9FND5ewOlmBt7lvA0locooyLcwg
Hg0tBk4rwVjiMTrK70ZZx7p1dCaFd/vPUywtNlqo50ka/FxbCK/VhAl+dWKMyNuU
qaHjBT3QJQWf+wjbkseFpjLPg7JYjlublyQjl3iRErHliTrtij9z8PlvUaTb6/ts
J6d4LfoD+/K9z9Bwh+ZvRKTKSPO0iONyGnvCxPXhgkTy2bMuzMMWrUIk9ufwdvly
wz42jD0nrWEHibMbcAKk690KVgDspdhYdOEjr3ycaJCJGQ5kBBiHuG3NT69ur1xD
1BxqLS1GOxwfDel1FdI10Q94tJAMx0O7I0tMJLAoCQKBgQD9vTjU5bMjnwJtSPlB
gdMdupZjON0wPcj68E/W24n5oYN4SAK/20peElwSor2dimNpnG8mqFZ5mqnKiXl/
uZpJzPga9MBhj3/zVijzqPOKBQx6WDYCqyaywz9TsMSRJos9PgV190e5F0VfZcIV
V6IEIwwDCAud8lYrVJJf/ZNDqwKBgQDvIXy3/knhU2HtKpSWnYzmEibNGPdp7+hY
BK8FRHSvLbPqd1z5iPXg+Gl25TpAmJL6h4Mf+owkkf0eUWKPL4tojkn0PoJEHTOO
53EYTEwDzaY75zSaMay7Z5oOBYpStwvJDY+YGzl1XYIkrYaTEwMv2g3p2UczfL8k
yP260NC4BQKBgHlQzSlNIZc4YUqrBzGAxtWB7oFGIMr932fLGgEaOh+2T0tk8puU
Vzwe/xKR6KK4Fcva1XHgLmg5wFBr5kFhFhmO/Fi3CHwcxgor+ax17OriexLLthcU
iY4St+Zlr7XOfegsDSRXtF0UeUChQGg/2+CqeQXCBPvhb72L0+g9Lvm9AoGBAJr5
n+N6eJUAPgG/S8cE2jCs6NqY6JeOdIy+lFMcl2aEfwpgSzApM/iV5Xu5eXQtrWuR
8UgDT1nQBzPj2LUlQfsD5CfXbwMHzcc6dVAi+kyotagy4iNgOCrILM4Thx6uJIQr
NrmEQ0uty09L6mBcvP8BGW1JdFyI5zPG0rGE7Q+lAoGAV8hulvMoySocdwMGh3MG
J099JkbJWzWG6CB8zuSCgQ5fS0LStbc68IF5mcaF8lO9PgWb9qKG3Bl41Af72H+3
YtW+gwpVghlyZv/A+ZEbC4TFCpbsbJn2WP+tWKd51JEPF2dc7dc8dc/hH2PNWT6j
PuXkvRFGyvakAFsF9c866ec=
-----END PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7QTZERu5knpoDGBPOgdR
GiqAaauB+H7gOE7KvK3OVs68wxiSwfbGfY43dAgZp91hRpb8sh5+WkRI7/XXb8Tc
P2fq2imM1v9SfYRmry2LxAoD12PUxH9QlUJfDbGv1AN+T4PdagakoGywBOOcAqPG
jhXk0asx2mm6S/WOlRSheeJv/YJC/5O4AdM5rc+0r3wM0Nvy0HQRx0OTcZdm6N2O
MaF3APIbEHXlGJU/LrG9TU0vdbWkfAtDLHTw39E8JkWcGnyA80W43947x4lBYC3I
LDQsyde0DpHy+sEKGXV5YmDZcdV0ue0UYy7Lmgn1SpisZ5umUgH07vc+WLIBt3M6
VwIDAQAB
-----END PUBLIC KEY-----`,
    crl: `-----BEGIN X509 CRL-----
MIIB3jCBxwIBATANBgkqhkiG9w0BAQsFADCBgzELMAkGA1UEBhMCREUxCzAJBgNV
BAgMAkJXMRUwEwYDVQQHDAxGcmV1ZGVuc3RhZHQxJzAlBgNVBAoMHlRydXN0cG9p
bnQgVExTIEludGVybWVkaWF0ZSBDQTEnMCUGA1UEAwweVHJ1c3Rwb2ludCBUTFMg
SW50ZXJtZWRpYXRlIENBFw0yNTEyMTgwODU3MzZaFw0yNjAxMTcwODU3MzZaoA8w
DTALBgNVHRQEBAICEAAwDQYJKoZIhvcNAQELBQADggEBAI9qiTbXXSgrK49DgvEx
HhSSgetq5Vy95p3V3p9OpPyxRMV1YhubNTO8LKZUkDC0qxuNzLY/76SnghzGrbmy
N7w0Obyho8wBhiHhoRya3A9dRDhOmerVYJEZWhagRK2EZzP6VrRLt5lcwWTx95cC
uucxt602xR9Zy5xmULQuDW5tUoNC/WBiwAqOIs5nH+aRt9KAmKCZgw0RTx6LUQs2
AcrsxWSr/uCeoLzUXoZyEwcv5TNy5q3rgK4CQf8MpmnSMQg4coKvYPozmfq6pXwY
fw9E66kTq32NJi7tFDI4iYyPowdx0pgTv2fEt//nm/WOjPNY4b49fv39Ps4DklDr
WbE=
-----END X509 CRL-----`,
    crlAsn1: `Certificate Revocation List (CRL):
    Version 2 (0x1)
    Signature Algorithm: sha256WithRSAEncryption
    Issuer: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Intermediate CA, CN=Trustpoint TLS Intermediate CA
    Last Update: Dec 18 08:57:36 2025 GMT
    Next Update: Jan 17 08:57:36 2026 GMT
    CRL extensions:
        X509v3 CRL Number: 
            4096
No Revoked Certificates.
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        8f:6a:89:36:d7:5d:28:2b:2b:8f:43:82:f1:31:1e:14:92:81:
        eb:6a:e5:5c:bd:e6:9d:d5:de:9f:4e:a4:fc:b1:44:c5:75:62:
        1b:9b:35:33:bc:2c:a6:54:90:30:b4:ab:1b:8d:cc:b6:3f:ef:
        a4:a7:82:1c:c6:ad:b9:b2:37:bc:34:39:bc:a1:a3:cc:01:86:
        21:e1:a1:1c:9a:dc:0f:5d:44:38:4e:99:ea:d5:60:91:19:5a:
        16:a0:44:ad:84:67:33:fa:56:b4:4b:b7:99:5c:c1:64:f1:f7:
        97:02:ba:e7:31:b7:ad:36:c5:1f:59:cb:9c:66:50:b4:2e:0d:
        6e:6d:52:83:42:fd:60:62:c0:0a:8e:22:ce:67:1f:e6:91:b7:
        d2:80:98:a0:99:83:0d:11:4f:1e:8b:51:0b:36:01:ca:ec:c5:
        64:ab:fe:e0:9e:a0:bc:d4:5e:86:72:13:07:2f:e5:33:72:e6:
        ad:eb:80:ae:02:41:ff:0c:a6:69:d2:31:08:38:72:82:af:60:
        fa:33:99:fa:ba:a5:7c:18:7f:0f:44:eb:a9:13:ab:7d:8d:26:
        2e:ed:14:32:38:89:8c:8f:a3:07:71:d2:98:13:bf:67:c4:b7:
        ff:e7:9b:f5:8e:8c:f3:58:e1:be:3d:7e:fd:fd:3e:ce:03:92:
        50:eb:59:b1`,
  },
  endEntity: {
    name: "Example End-Entity",
    pem: `-----BEGIN CERTIFICATE-----
MIIEEDCCAvigAwIBAgIUYPUT9ygWksKT3NSSeRvj/ntT0bUwDQYJKoZIhvcNAQEL
BQAwgYMxCzAJBgNVBAYTAkRFMQswCQYDVQQIDAJCVzEVMBMGA1UEBwwMRnJldWRl
bnN0YWR0MScwJQYDVQQKDB5UcnVzdHBvaW50IFRMUyBJbnRlcm1lZGlhdGUgQ0Ex
JzAlBgNVBAMMHlRydXN0cG9pbnQgVExTIEludGVybWVkaWF0ZSBDQTAeFw0yNTEy
MTgwODU3MzZaFw0yNzAxMTkwODU3MzZaMGsxCzAJBgNVBAYTAkRFMQswCQYDVQQI
DAJCVzEVMBMGA1UEBwwMRnJldWRlbnN0YWR0MR4wHAYDVQQKDBVUcnVzdHBvaW50
IFRMUyBTZXJ2ZXIxGDAWBgNVBAMMD3d3dy5leGFtcGxlLmNvbTCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAKtQaHIBTB3eNavVgse+5LaQoVVYyTtd7OiJ
zHxEPa/82gFe3uRolyBShS6r/lT4BKCPrIZbKXoKeXChVV9pjcfu1Muz1CP4damb
oE4fVMXPSigNeOI1ocHVx5qLjRBAjWMzF7+mKH3Bi9Uxg1eiGBPIrmxz4CeBV1dm
rP+uPn0iWB5VqXzvdF4RnIcRRQM2SgFLLYOtFe/9V+Tqi5WbV37VzXXhKTpqmSQn
rS4aUwLsNNbKjCSioGysNgVsUKhalvgR/dOTZXkOkJDcPwglZX/WWWPeBo+qJvv3
SePGLFpn7AdlYndCNHgtR4ghzIeui3L294g5fysIjRzFfNj+IfMCAwEAAaOBkjCB
jzAMBgNVHRMBAf8EAjAAMA4GA1UdDwEB/wQEAwIFoDATBgNVHSUEDDAKBggrBgEF
BQcDATAaBgNVHREEEzARgg93d3cuZXhhbXBsZS5jb20wHQYDVR0OBBYEFNgOXXst
7JeWJ1Zw1HZzX3KnS8/+MB8GA1UdIwQYMBaAFEWz1l8YcEgKyZM9baRZFL/RKtQW
MA0GCSqGSIb3DQEBCwUAA4IBAQCqSRCM9BzhbbLt7wTsAnqlTn7OX/lLqi2shrn+
dlkX0zyKYyRlqtvs719BcuxwFGYBh/3h6PtwoznnuAyps5ktbp+2JR+o1G7ciQ6b
sjYyskS9ktIqILgGbNtmDqnY3TZRqOz8ZeX0quUIEFaIdCrLEEJwHkTiP+0FiAGA
3DEwaRK6Wq5annVG+/rcjdvCdhPfefSL1cBNxfz7VS87Uppik/GC/xLO9GpUhdzE
a9DpRnlBVw38Ub0dgKITsvBQ0iAx4OWfABhbBHiFWNTTdGoWJ3Zf+THRQS0Lnf+2
5pvznOB2BAKhgrizqUQIPOKq5jfUGr4svwkGhM95AzStn0Vy
-----END CERTIFICATE-----`,
    asn1: `Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            60:f5:13:f7:28:16:92:c2:93:dc:d4:92:79:1b:e3:fe:7b:53:d1:b5
        Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Intermediate CA, CN=Trustpoint TLS Intermediate CA
        Validity
            Not Before: Dec 18 08:57:36 2025 GMT
            Not After : Jan 19 08:57:36 2027 GMT
        Subject: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Server, CN=www.example.com
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:ab:50:68:72:01:4c:1d:de:35:ab:d5:82:c7:be:
                    e4:b6:90:a1:55:58:c9:3b:5d:ec:e8:89:cc:7c:44:
                    3d:af:fc:da:01:5e:de:e4:68:97:20:52:85:2e:ab:
                    fe:54:f8:04:a0:8f:ac:86:5b:29:7a:0a:79:70:a1:
                    55:5f:69:8d:c7:ee:d4:cb:b3:d4:23:f8:75:a9:9b:
                    a0:4e:1f:54:c5:cf:4a:28:0d:78:e2:35:a1:c1:d5:
                    c7:9a:8b:8d:10:40:8d:63:33:17:bf:a6:28:7d:c1:
                    8b:d5:31:83:57:a2:18:13:c8:ae:6c:73:e0:27:81:
                    57:57:66:ac:ff:ae:3e:7d:22:58:1e:55:a9:7c:ef:
                    74:5e:11:9c:87:11:45:03:36:4a:01:4b:2d:83:ad:
                    15:ef:fd:57:e4:ea:8b:95:9b:57:7e:d5:cd:75:e1:
                    29:3a:6a:99:24:27:ad:2e:1a:53:02:ec:34:d6:ca:
                    8c:24:a2:a0:6c:ac:36:05:6c:50:a8:5a:96:f8:11:
                    fd:d3:93:65:79:0e:90:90:dc:3f:08:25:65:7f:d6:
                    59:63:de:06:8f:aa:26:fb:f7:49:e3:c6:2c:5a:67:
                    ec:07:65:62:77:42:34:78:2d:47:88:21:cc:87:ae:
                    8b:72:f6:f7:88:39:7f:2b:08:8d:1c:c5:7c:d8:fe:
                    21:f3
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Basic Constraints: critical
                CA:FALSE
            X509v3 Key Usage: critical
                Digital Signature, Key Encipherment
            X509v3 Extended Key Usage: 
                TLS Web Server Authentication
            X509v3 Subject Alternative Name: 
                DNS:www.example.com
            X509v3 Subject Key Identifier: 
                D8:0E:5D:7B:2D:EC:97:96:27:56:70:D4:76:73:5F:72:A7:4B:CF:FE
            X509v3 Authority Key Identifier: 
                45:B3:D6:5F:18:70:48:0A:C9:93:3D:6D:A4:59:14:BF:D1:2A:D4:16
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        aa:49:10:8c:f4:1c:e1:6d:b2:ed:ef:04:ec:02:7a:a5:4e:7e:
        ce:5f:f9:4b:aa:2d:ac:86:b9:fe:76:59:17:d3:3c:8a:63:24:
        65:aa:db:ec:ef:5f:41:72:ec:70:14:66:01:87:fd:e1:e8:fb:
        70:a3:39:e7:b8:0c:a9:b3:99:2d:6e:9f:b6:25:1f:a8:d4:6e:
        dc:89:0e:9b:b2:36:32:b2:44:bd:92:d2:2a:20:b8:06:6c:db:
        66:0e:a9:d8:dd:36:51:a8:ec:fc:65:e5:f4:aa:e5:08:10:56:
        88:74:2a:cb:10:42:70:1e:44:e2:3f:ed:05:88:01:80:dc:31:
        30:69:12:ba:5a:ae:5a:9e:75:46:fb:fa:dc:8d:db:c2:76:13:
        df:79:f4:8b:d5:c0:4d:c5:fc:fb:55:2f:3b:52:9a:62:93:f1:
        82:ff:12:ce:f4:6a:54:85:dc:c4:6b:d0:e9:46:79:41:57:0d:
        fc:51:bd:1d:80:a2:13:b2:f0:50:d2:20:31:e0:e5:9f:00:18:
        5b:04:78:85:58:d4:d3:74:6a:16:27:76:5f:f9:31:d1:41:2d:
        0b:9d:ff:b6:e6:9b:f3:9c:e0:76:04:02:a1:82:b8:b3:a9:44:
        08:3c:e2:aa:e6:37:d4:1a:be:2c:bf:09:06:84:cf:79:03:34:
        ad:9f:45:72`,
    privateKey: `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrUGhyAUwd3jWr
1YLHvuS2kKFVWMk7Xezoicx8RD2v/NoBXt7kaJcgUoUuq/5U+ASgj6yGWyl6Cnlw
oVVfaY3H7tTLs9Qj+HWpm6BOH1TFz0ooDXjiNaHB1ceai40QQI1jMxe/pih9wYvV
MYNXohgTyK5sc+AngVdXZqz/rj59IlgeVal873ReEZyHEUUDNkoBSy2DrRXv/Vfk
6ouVm1d+1c114Sk6apkkJ60uGlMC7DTWyowkoqBsrDYFbFCoWpb4Ef3Tk2V5DpCQ
3D8IJWV/1llj3gaPqib790njxixaZ+wHZWJ3QjR4LUeIIcyHroty9veIOX8rCI0c
xXzY/iHzAgMBAAECggEADn4H+YD9/fBy4Bb48DBIOK0fVARMF09L5j4ZN0THzSmZ
2nZt0USLaFevkZh8mvzvDOAqnnEVOKnf+egdonhgK9MBKG+NjJkNTYXvUTyNFz2a
dROMSUkNM12EFbq+Rur9d8nDAnQqRiOUUm3Uweb7nEAK7vzJSfF2QI9C8+kH7ndQ
xlkkCWTIw9m9IXQmF9rr498wJDkkcmEIO4lCDAwX0PodP1PsI3iAIvqJbpc17o6g
jBSQXU7FHp77F2ct1nFtjmPfuMHxLfL++i/O62LRisLfLcS0jCi/pkaxWzHim1g9
+6JrvTa7XR5UKU00lkCiUvc8nBevV1iyc4H3rLczMQKBgQDVshx4HU8tF3spRZ0Y
+6yg6Ddt3pBNhhh1pvW4roRF90wGiUFkZ3pz56ahGuMyilQ5J3Arfaw1/zkeKHYD
5U0uU+kQ9FYK4SBpP9NgPf6zkvBVz2X3J005t7IyAQOtqQncHVG6cKpvBrY1mB+C
gv0p16B4CYRvu92JneCBpu0J8QKBgQDNOm/DcCDN7icaqzug1rTvEUwxTNSugPWm
QdvMMqPgeWqZMe86jEnGnEXQKCYyre/rRPNzcAWOKbcTj3L688hc7P7JBSfio9Eh
mKJ1Phv1PsMLLIZSrpYg1rCF50YVvpNuIaAZd6iomGHGZeoNYzn3+MVHMmARkho4
R0HQDNwmIwKBgQDKbhjt58XTD0VKSXmR6wcSvieT2puT9I1DFk/7DMaciLDqGCdr
92JWXYDJaHEEtWknYyas7DWwSP9QhD+XXSYJ1s8Xkn3XfH95dE7GArQ+Y9lrUDZl
NEPBgzQ4jiFv5otCijubg5LP7em5R0vCFFfBxVNroohkV/B6pqW/6+Lr4QKBgDMh
hAblQMcNtqBmWQzRcXK+lIUT50kyyAEMF37gfwPGPFC+qCOmIBtjg+FAn4Ow4j1z
iFQSbM/mhL5S1wq/AgRk53Wd2zoUJl6AcLlVKBIJ+P4nsa+X379+vawe2s9AE+s0
ZXby4QpgLLwJWC7Nsfud90itvFGkXPP4jOUQzyiRAoGAXLfJRK2re7oKmZ8V5PjW
dloEaE2CJOaxdX2/hla/4XLNIaw4h992EdBdZsCvNZbR/em20YmCQbI45xAsPNAW
TKcQ3ICOTT6gMLgPZi7l/j2zxziStTrhgWRHPn7n8YEGZ59Mf1U8B/1Zm/AuCB+Z
4WU/hll/bjROwvzOpL/RtIM=
-----END PRIVATE KEY-----`,
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq1BocgFMHd41q9WCx77k
tpChVVjJO13s6InMfEQ9r/zaAV7e5GiXIFKFLqv+VPgEoI+shlspegp5cKFVX2mN
x+7Uy7PUI/h1qZugTh9Uxc9KKA144jWhwdXHmouNEECNYzMXv6YofcGL1TGDV6IY
E8iubHPgJ4FXV2as/64+fSJYHlWpfO90XhGchxFFAzZKAUstg60V7/1X5OqLlZtX
ftXNdeEpOmqZJCetLhpTAuw01sqMJKKgbKw2BWxQqFqW+BH905NleQ6QkNw/CCVl
f9ZZY94Gj6om+/dJ48YsWmfsB2Vid0I0eC1HiCHMh66Lcvb3iDl/KwiNHMV82P4h
8wIDAQAB
-----END PUBLIC KEY-----`,
    crl: null, // No CRL for end entity
  },
};


function pemToDerHex(pem) {
  if (!pem) return "";
  const b64 = pem
    .replace(/-----BEGIN CERTIFICATE-----/g, "")
    .replace(/-----END CERTIFICATE-----/g, "")
    .replace(/\s+/g, "");
  try {
    const binary = atob(b64);
    const hex = Array.from(binary, (c) =>
      (c.charCodeAt(0) & 0xff).toString(16).padStart(2, "0")
    ).join("");
    return hex.match(/.{1,64}/g)?.join(" ") || hex;
  } catch (e) {
    return "(invalid PEM / base64)";
  }
}

export default function CertificateExplainer() {
  const [selected, setSelected] = useState("endEntity");
  const [format, setFormat] = useState("pem");
  const [chapter, setChapter] = useState(1);
  const [crlFormat, setCrlFormat] = useState("pem");
  const [workflowStep, setWorkflowStep] = useState(1);

  const current = samples[selected];
  const derHex = useMemo(() => pemToDerHex(current.pem), [current]);
  const endEntityDerHex = useMemo(() => pemToDerHex(samples.endEntity.pem), []);

  // When switching to Chapter 4, default to root CA
  React.useEffect(() => {
    if (chapter === 4 && selected === "endEntity") {
      setSelected("root");
    }
  }, [chapter, selected]);

  return (
    <Layout>
      <Seo
        title="Certificate Explainer - Trustpoint"
        description="Interactive explanation of X.509 certificates, chain of trust, and PKI concepts with real certificate examples."
      />
      <div style={{ fontFamily: "Inter, Roboto, sans-serif", padding: 32 }}>
        <h1>Interactive PKI Tutorial</h1>

        <div style={{ display: "flex", gap: 8, marginBottom: 24, borderBottom: "2px solid #eee", paddingBottom: 0 }}>
          {[
            { num: 1, title: "Keys" },
            { num: 2, title: "Certificates" },
            { num: 3, title: "Chain of Trust" },
            { num: 4, title: "CRLs" },
            { num: 5, title: "Request Workflow" }
          ].map((ch) => (
            <button
              key={ch.num}
              onClick={() => setChapter(ch.num)}
              style={{
                padding: "12px 20px",
                border: "none",
                borderBottom: chapter === ch.num ? "3px solid #2b7cff" : "3px solid transparent",
                backgroundColor: "transparent",
                cursor: "pointer",
                fontSize: 15,
                fontWeight: chapter === ch.num ? "bold" : "normal",
                color: chapter === ch.num ? "#2b7cff" : "inherit",
                opacity: chapter === ch.num ? 1 : 0.6,
                transition: "all 0.2s"
              }}
            >
              {ch.num}. {ch.title}
            </button>
          ))}
        </div>

        {/* Chapter 1: Private and Public Keys */}
        {chapter === 1 && (
          <div>
            <h2>Private and Public Keys</h2>
            <p>
              Public key cryptography uses a pair of mathematically related keys. The <strong>private key</strong> must be kept secret,
              while the <strong>public key</strong> can be shared freely.
            </p>

            <div style={{ display: "flex", gap: 24, marginTop: 20 }}>
              <div style={{ flex: 1, border: "1px solid #eee", padding: 16, borderRadius: 6 }}>
                <h3>Private Key</h3>
                <p>Used to:</p>
                <ul style={{ paddingLeft: 40 }}>
                  <li><strong>Sign</strong> data (creates digital signatures)</li>
                  <li><strong>Decrypt</strong> data encrypted with the public key</li>
                </ul>
                <p style={{ marginTop: 16, padding: 12, backgroundColor: "rgba(255, 193, 7, 0.1)", borderRadius: 4, border: "1px solid rgba(255, 193, 7, 0.3)" }}>
                  ⚠️ Must be kept secret and protected!
                </p>
              </div>

              <div style={{ flex: 1, border: "1px solid #eee", padding: 16, borderRadius: 6 }}>
                <h3>Public Key</h3>
                <p>Used to:</p>
                <ul style={{ paddingLeft: 40 }}>
                  <li><strong>Verify</strong> signatures created by the private key</li>
                  <li><strong>Encrypt</strong> data (only the private key can decrypt it)</li>
                </ul>
                <p style={{ marginTop: 16, padding: 12, backgroundColor: "#d1ecf1", borderRadius: 4, color: "#333" }}>
                  ✓ Safe to share publicly
                </p>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <h3>Example: End Entity Key Pair</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div style={{ border: "1px solid #eee", padding: 16, borderRadius: 6 }}>
                  <h4 style={{ marginTop: 0 }}>Private Key</h4>
                  <pre style={{ whiteSpace: "pre-wrap", fontSize: 11, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 300, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                    {samples.endEntity.privateKey}
                  </pre>
                  <p style={{ fontSize: 12, marginTop: 8, opacity: 0.7 }}>
                    ⚠️ This private key is shown unencrypted for educational purposes only. In production, private keys are always stored securely.
                  </p>
                </div>

                <div style={{ border: "1px solid #eee", padding: 16, borderRadius: 6 }}>
                  <h4 style={{ marginTop: 0 }}>Public Key</h4>
                  <pre style={{ whiteSpace: "pre-wrap", fontSize: 11, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 300, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                    {samples.endEntity.publicKey}
                  </pre>
                  <p style={{ fontSize: 12, marginTop: 8, opacity: 0.7 }}>
                    ✓ This public key can be safely shared and will be embedded in the certificate.
                  </p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, padding: 16, backgroundColor: "rgba(59, 130, 246, 0.1)", borderRadius: 6, border: "1px solid rgba(59, 130, 246, 0.2)" }}>
              <strong>Key Concept:</strong> These keys are mathematically related. The public key (shown above) will be embedded in the certificate (Chapter 2), allowing others to verify signatures created with the private key and encrypt data that only the private key can decrypt.
            </div>
          </div>
        )}

        {/* Chapter 2: Certificates */}
        {chapter === 2 && (
          <div>
            <h2>X.509 Certificates</h2>
            <p>
              A certificate is a digital document that binds a public key to an identity (e.g., a domain name, organization, or person).
              Certificates are issued and digitally signed by a Certificate Authority (CA).
            </p>

            <div style={{ marginTop: 20 }}>
              <h3>Certificate Components (ASN.1 Structure)</h3>
              <p style={{ fontSize: 14, marginBottom: 12 }}>The ASN.1 structure of the End Entity certificate with key components highlighted:</p>
              
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                <div style={{ flex: "2", border: "1px solid #eee", padding: 16, borderRadius: 6, backgroundColor: "rgba(0, 0, 0, 0.03)" }}>
                  <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, lineHeight: 1.6, margin: 0, color: "#000" }}>
                    {`Certificate:
    Data:`}
                    <span style={{ backgroundColor: "#ffe4b5", padding: "2px 4px", borderRadius: 3 }}>
{`
        Version: 3 (0x2)
        Serial Number:
            3e:34:bc:63:e1:bf:44:f1:27:d9:54:e3:eb:be:d0:f5:dc:cb:5b:76`}
                    </span>
                    <span style={{ backgroundColor: "#e8e8e8", padding: "2px 4px", borderRadius: 3 }}>
{`
        Signature Algorithm: sha256WithRSAEncryption`}
                    </span>
                    <span style={{ backgroundColor: "#d4edda", padding: "2px 4px", borderRadius: 3 }}>
{`
        Issuer: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint TLS Intermediate CA, CN=Trustpoint TLS Intermediate CA`}
                    </span>
                    <span style={{ backgroundColor: "#e6ccff", padding: "2px 4px", borderRadius: 3 }}>
{`
        Validity
            Not Before: Dec 18 08:57:37 2025 GMT
            Not After : Dec 18 08:57:37 2026 GMT`}
                    </span>
                    <span style={{ backgroundColor: "#cce5ff", padding: "2px 4px", borderRadius: 3 }}>
{`
        Subject: C=DE, ST=BW, L=Freudenstadt, O=Trustpoint, CN=testserver.trustpoint.local`}
                    </span>
                    <span style={{ backgroundColor: "#d1ecf1", padding: "2px 4px", borderRadius: 3 }}>
{`
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:ab:50:68:72:01:4c:1d:de:35:ab:d5:82:c7:be:
                    e4:b6:90:a1:55:58:c9:3b:5d:ec:e8:89:cc:7c:44:
                    ...`}
                    </span>
                    <span style={{ backgroundColor: "#ffd9b3", padding: "2px 4px", borderRadius: 3 }}>
{`
        X509v3 extensions:
            X509v3 Basic Constraints: 
                CA:FALSE
            X509v3 Key Usage: critical
                Digital Signature, Key Encipherment
            X509v3 Extended Key Usage: 
                TLS Web Server Authentication`}
                    </span>
                    <span style={{ backgroundColor: "#f8d7da", padding: "2px 4px", borderRadius: 3 }}>
{`
    Signature Algorithm: sha256WithRSAEncryption
    Signature Value:
        4e:dc:aa:19:02:7f:7d:3e:cb:0b:45:dc:bc:9d:34:e8:3a:4e:
        ...`}
                    </span>
                  </pre>
                </div>

                <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ padding: 10, backgroundColor: "#ffe4b5", borderRadius: 6, border: "1px solid #daa520", color: "#000" }}>
                    <strong style={{ fontSize: 13 }}>Version & Serial</strong>
                    <p style={{ fontSize: 12, margin: "4px 0 0 0", color: "#333" }}>X.509 v3, unique serial number</p>
                  </div>
                  <div style={{ padding: 10, backgroundColor: "#e8e8e8", borderRadius: 6, border: "1px solid #999", color: "#000" }}>
                    <strong style={{ fontSize: 13 }}>Signature Algorithm</strong>
                    <p style={{ fontSize: 12, margin: "4px 0 0 0", color: "#333" }}>Algorithm used by issuer to sign</p>
                  </div>
                  <div style={{ padding: 10, backgroundColor: "#d4edda", borderRadius: 6, border: "1px solid #28a745", color: "#000" }}>
                    <strong style={{ fontSize: 13 }}>Issuer</strong>
                    <p style={{ fontSize: 12, margin: "4px 0 0 0", color: "#333" }}>Who signed this certificate</p>
                  </div>
                  <div style={{ padding: 10, backgroundColor: "#e6ccff", borderRadius: 6, border: "1px solid #9b59b6", color: "#000" }}>
                    <strong style={{ fontSize: 13 }}>Validity</strong>
                    <p style={{ fontSize: 12, margin: "4px 0 0 0", color: "#333" }}>Certificate validity period</p>
                  </div>
                  <div style={{ padding: 10, backgroundColor: "#cce5ff", borderRadius: 6, border: "1px solid #007bff", color: "#000" }}>
                    <strong style={{ fontSize: 13 }}>Subject</strong>
                    <p style={{ fontSize: 12, margin: "4px 0 0 0", color: "#333" }}>Who owns this certificate</p>
                  </div>
                  <div style={{ padding: 10, backgroundColor: "#d1ecf1", borderRadius: 6, border: "1px solid #17a2b8", color: "#000" }}>
                    <strong style={{ fontSize: 13 }}>Public Key</strong>
                    <p style={{ fontSize: 12, margin: "4px 0 0 0", color: "#333" }}>Subject's public key (RSA 2048)</p>
                  </div>
                  <div style={{ padding: 10, backgroundColor: "#ffd9b3", borderRadius: 6, border: "1px solid #ff8c00", color: "#000" }}>
                    <strong style={{ fontSize: 13 }}>Extensions</strong>
                    <p style={{ fontSize: 12, margin: "4px 0 0 0", color: "#333" }}>Attributes and constraints</p>
                  </div>
                  <div style={{ padding: 10, backgroundColor: "#f8d7da", borderRadius: 6, border: "1px solid #dc3545", color: "#000" }}>
                    <strong style={{ fontSize: 13 }}>Signature</strong>
                    <p style={{ fontSize: 12, margin: "4px 0 0 0", color: "#333" }}>Issuer's digital signature</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <h3>Example: End Entity Certificate</h3>
              
              <div style={{ display: "flex", gap: 4, marginBottom: 16, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
                {["pem", "der", "asn1"].map((fmt) => (
                  <button
                    key={fmt}
                    onClick={() => setFormat(fmt)}
                    style={{
                      padding: "8px 16px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px 4px 0 0",
                      backgroundColor: format === fmt ? "rgba(43, 124, 255, 0.1)" : "transparent",
                      borderBottom: format === fmt ? "2px solid #2b7cff" : "1px solid rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      fontSize: 14,
                      fontWeight: format === fmt ? "bold" : "normal",
                      color: format === fmt ? "#2b7cff" : "inherit",
                      opacity: format === fmt ? 1 : 0.6
                    }}
                  >
                    {fmt.toUpperCase()}
                  </button>
                ))}
              </div>

              <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
                {format === "pem" && (
                  <div>
                    <strong>PEM Format</strong>
                    <p style={{ fontSize: 13, marginBottom: 8 }}>Base64-encoded certificate, most common format</p>
                    <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 300, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                      {samples.endEntity.pem}
                    </pre>
                  </div>
                )}
                {format === "der" && (
                  <div>
                    <strong>DER Format (Hexadecimal)</strong>
                    <p style={{ fontSize: 13, marginBottom: 8 }}>Binary encoding of the certificate structure</p>
                    <pre style={{ whiteSpace: "pre-wrap", fontSize: 11, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 300, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                      {endEntityDerHex}
                    </pre>
                  </div>
                )}
                {format === "asn1" && (
                  <div>
                    <strong>ASN.1 Structure</strong>
                    <p style={{ fontSize: 13, marginBottom: 8 }}>Human-readable view of the certificate's internal structure</p>
                    <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 300, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                      {samples.endEntity.asn1}
                    </pre>
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: 20, padding: 16, backgroundColor: "rgba(59, 130, 246, 0.1)", borderRadius: 6, border: "1px solid rgba(59, 130, 246, 0.2)" }}>
              <strong>Key Concept:</strong> Anyone can verify a certificate's signature using the issuer's public key. This proves
              the certificate hasn't been tampered with and was issued by the claimed CA.
            </div>
          </div>
        )}

        {/* Chapter 3: Chain of Trust */}
        {chapter === 3 && (
          <div>
            <h2>Chain of Trust</h2>
            <p>
              Certificates are organized in a hierarchy. End-entity certificates are signed by intermediate CAs,
              which are in turn signed by a root CA. The root CA is self-signed and explicitly trusted by applications.
            </p>

            <div style={{ marginTop: 24 }}>
              <h3>Certificate Chain</h3>
              <svg width="100%" height="280" style={{ border: "1px solid #eee", borderRadius: 6, padding: 20 }}>
                <g onClick={() => setSelected("root")} style={{ cursor: "pointer" }}>
                  <circle cx="100" cy="80" r="50" fill={selected === "root" ? "#2b7cff" : "#e6f0ff"} stroke="#2b7cff" strokeWidth="2" />
                  <text x="100" y="75" textAnchor="middle" fill={selected === "root" ? "#fff" : "#2b7cff"} fontSize="14" fontWeight="bold">Root CA</text>
                  <text x="100" y="92" textAnchor="middle" fill={selected === "root" ? "#fff" : "#2b7cff"} fontSize="11">Self-signed</text>
                </g>
                <text x="100" y="155" textAnchor="middle" fontSize="12" fillOpacity="0.6">Trust Anchor</text>

                <line x1="150" y1="80" x2="280" y2="80" stroke="#999" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="215" y="70" textAnchor="middle" fontSize="11" fillOpacity="0.6">signs</text>

                <g onClick={() => setSelected("intermediate")} style={{ cursor: "pointer" }}>
                  <circle cx="350" cy="80" r="50" fill={selected === "intermediate" ? "#2b7cff" : "#e6f0ff"} stroke="#2b7cff" strokeWidth="2" />
                  <text x="350" y="75" textAnchor="middle" fill={selected === "intermediate" ? "#fff" : "#2b7cff"} fontSize="14" fontWeight="bold">Issuing CA</text>
                  <text x="350" y="92" textAnchor="middle" fill={selected === "intermediate" ? "#fff" : "#2b7cff"} fontSize="11">Intermediate</text>
                </g>
                <text x="350" y="155" textAnchor="middle" fontSize="12" fillOpacity="0.6">Signed by Root</text>

                <line x1="400" y1="80" x2="530" y2="80" stroke="#999" strokeWidth="2" markerEnd="url(#arrow)" />
                <text x="465" y="70" textAnchor="middle" fontSize="11" fillOpacity="0.6">signs</text>

                <g onClick={() => setSelected("endEntity")} style={{ cursor: "pointer" }}>
                  <rect x="560" y="30" width="100" height="100" rx="8" fill={selected === "endEntity" ? "#2b7cff" : "#e6f0ff"} stroke="#2b7cff" strokeWidth="2" />
                  <text x="610" y="75" textAnchor="middle" fill={selected === "endEntity" ? "#fff" : "#2b7cff"} fontSize="14" fontWeight="bold">End Entity</text>
                  <text x="610" y="92" textAnchor="middle" fill={selected === "endEntity" ? "#fff" : "#2b7cff"} fontSize="11">Server Cert</text>
                </g>
                <text x="610" y="155" textAnchor="middle" fontSize="12" fillOpacity="0.6">Signed by Issuing CA</text>

                <defs>
                  <marker id="arrow" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#999" />
                  </marker>
                </defs>
              </svg>
            </div>

            <div style={{ marginTop: 24 }}>
              <h3>Click on a certificate to view its details</h3>
              <div style={{ border: "1px solid #eee", padding: 16, borderRadius: 6, marginTop: 12 }}>
                <h4>{current.name}</h4>
                
                <div style={{ display: "flex", gap: 4, marginTop: 12, marginBottom: 16, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
                  {["pem", "der", "asn1"].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setFormat(fmt)}
                      style={{
                        padding: "8px 16px",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px 4px 0 0",
                        backgroundColor: format === fmt ? "rgba(43, 124, 255, 0.1)" : "transparent",
                        borderBottom: format === fmt ? "2px solid #2b7cff" : "1px solid rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        fontSize: 14,
                        fontWeight: format === fmt ? "bold" : "normal",
                        color: format === fmt ? "#2b7cff" : "inherit",
                        opacity: format === fmt ? 1 : 0.6
                      }}
                    >
                      {fmt.toUpperCase()}
                    </button>
                  ))}
                </div>

                <div>
                  {format === "pem" && (
                    <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 300, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                      {current.pem}
                    </pre>
                  )}
                  {format === "der" && (
                    <pre style={{ whiteSpace: "pre-wrap", fontSize: 11, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 300, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                      {derHex}
                    </pre>
                  )}
                  {format === "asn1" && (
                    <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 300, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                      {current.asn1}
                    </pre>
                  )}
                </div>
              </div>
            </div>

            <div style={{ marginTop: 20, padding: 16, backgroundColor: "rgba(59, 130, 246, 0.1)", borderRadius: 6, border: "1px solid rgba(59, 130, 246, 0.2)" }}>
              <strong>Key Concept:</strong> When an application (browser, email client, etc.) receives an end-entity certificate, it verifies the entire chain:
              it checks that the end-entity cert was signed by the intermediate CA, then checks that the intermediate CA cert
              was signed by the root CA, and finally confirms that the root CA is in its trusted store.
            </div>

            <div style={{ marginTop: 20 }}>
              <h3>Verification Process</h3>
              <ol style={{ fontSize: 14, lineHeight: 1.8 }}>
                <li>Application receives the <strong>End Entity</strong> certificate</li>
                <li>Application verifies it was signed by the <strong>Issuing CA</strong> (using the Issuing CA's public key)</li>
                <li>Application verifies the <strong>Issuing CA</strong> certificate was signed by the <strong>Root CA</strong></li>
                <li>Application checks that the <strong>Root CA</strong> is in its trusted certificate store</li>
                <li>If all checks pass, the connection is trusted ✓</li>
              </ol>
            </div>
          </div>
        )}

        {/* Chapter 4: Certificate Revocation Lists (CRLs) */}
        {chapter === 4 && (
          <div>
            <h2>Certificate Revocation Lists (CRLs)</h2>
            <p>
              Sometimes certificates need to be revoked before they expire (e.g., if a private key is compromised).
              A <strong>Certificate Revocation List (CRL)</strong> is a signed list of revoked certificate serial numbers
              published by a CA.
            </p>

            <div style={{ marginTop: 20 }}>
              <h3>Why Revoke a Certificate?</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 12 }}>
                <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
                  <strong>Key Compromise</strong>
                  <p style={{ fontSize: 13 }}>Private key was stolen or leaked</p>
                </div>
                <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
                  <strong>CA Compromise</strong>
                  <p style={{ fontSize: 13 }}>The issuing CA was compromised</p>
                </div>
                <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
                  <strong>Information Change</strong>
                  <p style={{ fontSize: 13 }}>Domain or organization details changed</p>
                </div>
                <div style={{ border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
                  <strong>Superseded</strong>
                  <p style={{ fontSize: 13 }}>Certificate replaced by a new one</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 24 }}>
              <h3>View CRLs</h3>
              <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
                {["root", "intermediate"].map((cert) => (
                  <button
                    key={cert}
                    onClick={() => setSelected(cert)}
                    style={{
                      padding: "8px 16px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                      borderRadius: 4,
                      backgroundColor: selected === cert ? "#2b7cff" : "transparent",
                      color: selected === cert ? "white" : "inherit",
                      opacity: selected === cert ? 1 : 0.7,
                      cursor: "pointer",
                      fontWeight: selected === cert ? "bold" : "normal"
                    }}
                  >
                    {samples[cert].name}
                  </button>
                ))}
              </div>

              {current.crl && (
                <div style={{ display: "flex", gap: 4, marginBottom: 12, borderBottom: "1px solid #eee", paddingBottom: 8 }}>
                  {["pem", "asn1"].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setCrlFormat(fmt)}
                      style={{
                        padding: "8px 16px",
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        borderRadius: "4px 4px 0 0",
                        backgroundColor: crlFormat === fmt ? "rgba(43, 124, 255, 0.1)" : "transparent",
                        borderBottom: crlFormat === fmt ? "2px solid #2b7cff" : "1px solid rgba(0, 0, 0, 0.1)",
                        cursor: "pointer",
                        fontSize: 14,
                        fontWeight: crlFormat === fmt ? "bold" : "normal",
                        color: crlFormat === fmt ? "#2b7cff" : "inherit",
                        opacity: crlFormat === fmt ? 1 : 0.6
                      }}
                    >
                      {fmt.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}

              <div style={{ border: "1px solid #eee", padding: 16, borderRadius: 6 }}>
                <h4>{current.name} - Certificate Revocation List</h4>
                {current.crl ? (
                  <div>
                    {crlFormat === "pem" && (
                      <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 400, marginTop: 12, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                        {current.crl}
                      </pre>
                    )}
                    {crlFormat === "asn1" && (
                      <pre style={{ whiteSpace: "pre-wrap", fontSize: 12, backgroundColor: "rgba(0, 0, 0, 0.03)", padding: 12, borderRadius: 4, overflow: "auto", maxHeight: 400, marginTop: 12, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                        {current.crlAsn1}
                      </pre>
                    )}
                  </div>
                ) : (
                  <div style={{ padding: 12, backgroundColor: "rgba(255, 193, 7, 0.1)", borderRadius: 4, marginTop: 12, border: "1px solid rgba(255, 193, 7, 0.3)" }}>
                    <strong>No CRL available</strong>
                    <p style={{ margin: "8px 0 0 0", fontSize: 14 }}>End entity certificates don't issue CRLs. Only Certificate Authorities (Root CA and Intermediate CA) publish CRLs listing the certificates they have revoked.</p>
                  </div>
                )}
              </div>
            </div>

            <div style={{ marginTop: 20 }}>
              <h3>How CRLs Work</h3>
              <ol style={{ fontSize: 14, lineHeight: 1.8 }}>
                <li>CA publishes a CRL at a specific URL (found in the certificate)</li>
                <li>Client downloads the CRL periodically</li>
                <li>Before trusting a certificate, client checks if its serial number is in the CRL</li>
                <li>If the serial number is found, the certificate is revoked and should not be trusted</li>
              </ol>
            </div>
          </div>
        )}

        {/* Chapter 5: Certificate Request Workflow */}
        {chapter === 5 && (
          <div>
            <h2>Certificate Request Workflow</h2>
            <p>
              This section illustrates the process of requesting and obtaining a certificate from a Certificate Authority.
              Click on each step to learn more about what happens at that stage.
            </p>

            <div style={{ marginTop: 24 }}>
              <svg width="800" height="460" style={{ border: "1px solid rgba(0, 0, 0, 0.1)", backgroundColor: "transparent" }}>
                {/* Step 1: Generate Keypair */}
                <g onClick={() => setWorkflowStep(1)} style={{ cursor: "pointer" }}>
                  <rect x="50" y="30" width="140" height="60" rx="8" 
                    fill={workflowStep === 1 ? "#2b7cff" : "#e6f0ff"} 
                    stroke="#2b7cff" strokeWidth="2" />
                  <text x="120" y="55" textAnchor="middle" 
                    fill={workflowStep === 1 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    1. Generate
                  </text>
                  <text x="120" y="72" textAnchor="middle" 
                    fill={workflowStep === 1 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    Keypair
                  </text>
                </g>

                {/* Arrow 1->2 (down) */}
                <line x1="120" y1="90" x2="120" y2="130" stroke="#666" strokeWidth="2" markerEnd="url(#arrow2)" />

                {/* Step 2: Generate CSR */}
                <g onClick={() => setWorkflowStep(2)} style={{ cursor: "pointer" }}>
                  <rect x="50" y="130" width="140" height="60" rx="8" 
                    fill={workflowStep === 2 ? "#2b7cff" : "#e6f0ff"} 
                    stroke="#2b7cff" strokeWidth="2" />
                  <text x="120" y="155" textAnchor="middle" 
                    fill={workflowStep === 2 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    2. Generate CSR
                  </text>
                  <text x="120" y="172" textAnchor="middle" 
                    fill={workflowStep === 2 ? "#fff" : "#2b7cff"} fontSize="12">
                    (Cert Request)
                  </text>
                </g>

                {/* Arrow 2->3 (down) */}
                <line x1="120" y1="190" x2="120" y2="230" stroke="#666" strokeWidth="2" markerEnd="url(#arrow2)" />

                {/* Step 3: Send CSR to CA */}
                <g onClick={() => setWorkflowStep(3)} style={{ cursor: "pointer" }}>
                  <rect x="50" y="230" width="140" height="60" rx="8" 
                    fill={workflowStep === 3 ? "#2b7cff" : "#e6f0ff"} 
                    stroke="#2b7cff" strokeWidth="2" />
                  <text x="120" y="252" textAnchor="middle" 
                    fill={workflowStep === 3 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    3. Send CSR
                  </text>
                  <text x="120" y="269" textAnchor="middle" 
                    fill={workflowStep === 3 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    to CA (EST)
                  </text>
                </g>

                {/* Arrow 3->4 */}
                <line x1="190" y1="260" x2="430" y2="160" stroke="#666" strokeWidth="2" markerEnd="url(#arrow2)" />

                {/* Step 4: CA Validates */}
                <g onClick={() => setWorkflowStep(4)} style={{ cursor: "pointer" }}>
                  <rect x="430" y="130" width="140" height="60" rx="8" 
                    fill={workflowStep === 4 ? "#2b7cff" : "#e6f0ff"} 
                    stroke="#2b7cff" strokeWidth="2" />
                  <text x="500" y="155" textAnchor="middle" 
                    fill={workflowStep === 4 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    4. CA Validates
                  </text>
                  <text x="500" y="172" textAnchor="middle" 
                    fill={workflowStep === 4 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    CSR
                  </text>
                </g>

                {/* Arrow 4->5 (down) */}
                <line x1="500" y1="190" x2="500" y2="230" stroke="#666" strokeWidth="2" markerEnd="url(#arrow2)" />

                {/* Step 5: CA Signs Certificate */}
                <g onClick={() => setWorkflowStep(5)} style={{ cursor: "pointer" }}>
                  <rect x="430" y="230" width="140" height="60" rx="8" 
                    fill={workflowStep === 5 ? "#2b7cff" : "#e6f0ff"} 
                    stroke="#2b7cff" strokeWidth="2" />
                  <text x="500" y="252" textAnchor="middle" 
                    fill={workflowStep === 5 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    5. CA Signs
                  </text>
                  <text x="500" y="269" textAnchor="middle" 
                    fill={workflowStep === 5 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    Certificate
                  </text>
                  <text x="500" y="284" textAnchor="middle" 
                    fill={workflowStep === 5 ? "#fff" : "#2b7cff"} fontSize="11">
                    (with CA private key)
                  </text>
                </g>

                {/* Arrow 5->6 */}
                <line x1="430" y1="260" x2="190" y2="360" stroke="#666" strokeWidth="2" markerEnd="url(#arrow2)" />

                {/* Step 6: Client Receives Certificate */}
                <g onClick={() => setWorkflowStep(6)} style={{ cursor: "pointer" }}>
                  <rect x="50" y="330" width="140" height="60" rx="8" 
                    fill={workflowStep === 6 ? "#2b7cff" : "#e6f0ff"} 
                    stroke="#2b7cff" strokeWidth="2" />
                  <text x="120" y="352" textAnchor="middle" 
                    fill={workflowStep === 6 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    6. Client Stores
                  </text>
                  <text x="120" y="369" textAnchor="middle" 
                    fill={workflowStep === 6 ? "#fff" : "#2b7cff"} fontSize="13" fontWeight="bold">
                    Certificate
                  </text>
                </g>

                {/* Client box */}
                <rect x="30" y="10" width="180" height="400" rx="4" 
                  fill="none" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
                <text x="120" y="430" textAnchor="middle" fillOpacity="0.6" fontSize="12">Client</text>

                {/* CA box */}
                <rect x="410" y="110" width="180" height="200" rx="4" 
                  fill="none" stroke="#999" strokeWidth="1" strokeDasharray="5,5" />
                <text x="500" y="430" textAnchor="middle" fillOpacity="0.6" fontSize="12">Certificate Authority</text>

                {/* Arrow marker */}
                <defs>
                  <marker id="arrow2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fillOpacity="0.6" />
                  </marker>
                </defs>
              </svg>
            </div>

            <div style={{ marginTop: 24, padding: 20, backgroundColor: "rgba(0, 0, 0, 0.03)", borderRadius: 8, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
              <h3 style={{ marginTop: 0 }}>Step {workflowStep} Details</h3>
              
              {workflowStep === 1 && (
                <div>
                  <h4>Generate Keypair</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    The client (e.g., a web server, user, or device) generates a public/private key pair. 
                    The <strong>private key</strong> must be kept secret and secure, while the <strong>public key</strong> 
                    will be included in the certificate.
                  </p>
                  <div style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", padding: 12, borderRadius: 4, marginTop: 12, fontFamily: "monospace", fontSize: 12, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                    <code>openssl genrsa -out private.key 2048</code><br/>
                    <code>openssl rsa -in private.key -pubout -out public.key</code>
                  </div>
                </div>
              )}

              {workflowStep === 2 && (
                <div>
                  <h4>Generate Certificate Signing Request (CSR)</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    The client creates a CSR containing the public key and identity information (Common Name, Organization, etc.). 
                    The CSR is signed with the private key to prove ownership of the key pair.
                  </p>
                  <div style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", padding: 12, borderRadius: 4, marginTop: 12, fontFamily: "monospace", fontSize: 12, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                    <code>openssl req -new -key private.key -out request.csr</code>
                  </div>
                  <p style={{ fontSize: 13, marginTop: 12, opacity: 0.7 }}>
                    The CSR contains: Subject DN, Public Key, and a self-signature to prove key ownership.
                  </p>
                </div>
              )}

              {workflowStep === 3 && (
                <div>
                  <h4>Send CSR to Certificate Authority</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    The client submits the CSR to a Certificate Authority (CA) using the Enrollment over Secure Transport (EST) protocol. 
                    EST provides a standardized, secure method for certificate enrollment and management over HTTPS.
                  </p>
                  <div style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", padding: 12, borderRadius: 4, marginTop: 12, fontFamily: "monospace", fontSize: 12, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
                    <code>POST /.well-known/est/simpleenroll</code>
                  </div>
                  <p style={{ fontSize: 13, marginTop: 12, opacity: 0.7 }}>
                    <strong>Important:</strong> The private key is NEVER sent to the CA, only the CSR with the public key.
                  </p>
                </div>
              )}

              {workflowStep === 4 && (
                <div>
                  <h4>CA Validates the CSR</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    The Certificate Authority verifies the information in the CSR before issuing a certificate.
                  </p>
                  <p style={{ fontSize: 13, marginTop: 12, opacity: 0.7 }}>
                    The CA also checks that the CSR signature is valid using the public key in the request.
                  </p>
                </div>
              )}

              {workflowStep === 5 && (
                <div>
                  <h4>CA Creates and Signs Certificate</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    After successful validation, the CA creates a certificate containing:
                  </p>
                  <ul style={{ fontSize: 14, lineHeight: 1.8 }}>
                    <li>The subject's public key (from the CSR)</li>
                    <li>Subject identity information (Common Name, Organization, etc.)</li>
                    <li>Issuer information (the CA's identity)</li>
                    <li>Validity period (Not Before / Not After dates)</li>
                    <li>Extensions (Key Usage, Subject Alternative Names, etc.)</li>
                  </ul>
                  <p style={{ fontSize: 14, marginTop: 12 }}>
                    The CA then <strong>signs the certificate with its own private key</strong>, creating a cryptographic 
                    signature that can be verified by anyone using the CA's public key (from the CA's certificate).
                  </p>
                </div>
              )}

              {workflowStep === 6 && (
                <div>
                  <h4>Client Receives and Stores Certificate</h4>
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    The signed certificate is sent back to the client, who stores it securely along with the private key. 
                    The certificate can now be used for:
                  </p>
                  <ul style={{ fontSize: 14, lineHeight: 1.8 }}>
                    <li><strong>TLS/SSL:</strong> Secure HTTPS connections</li>
                    <li><strong>Code Signing:</strong> Signing software or documents</li>
                    <li><strong>Email Encryption:</strong> S/MIME for encrypted email</li>
                    <li><strong>Authentication:</strong> Client certificate authentication</li>
                  </ul>
                  <p style={{ fontSize: 13, marginTop: 12, opacity: 0.7 }}>
                    The certificate and private key are typically stored in formats like PEM, PKCS#12 (.p12/.pfx), or in hardware security modules (HSMs).
                  </p>
                </div>
              )}
            </div>

            <div style={{ marginTop: 20, padding: 16, backgroundColor: "rgba(59, 130, 246, 0.1)", borderRadius: 6, border: "1px solid rgba(59, 130, 246, 0.2)" }}>
              <strong>Key Takeaway:</strong> The certificate request workflow ensures that only the entity controlling the private key 
              can use the certificate. The CA validates the requestor's identity before signing, creating a trusted binding between 
              the public key and the identity.
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}
